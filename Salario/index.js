// array para armazenar os salarios
const listaSalarios = [];
const listaSalariosAcima2500 = [];

// funcao para adicionar o valor inserido no input na array
function adicionarSalario() {
  const novoSalario = parseFloat(document.getElementById("novoSalario").value);
  // caso nao for numero ele nao aceita o valor inserido (NaN = not-a-number)
  if (!isNaN(novoSalario)) {
    const salarioComAumento = calcularAumento(novoSalario);
    listaSalarios.push({ original: novoSalario, aumento: salarioComAumento });
    atualizarListaSalarios();
    if (salarioComAumento > 2500) {
      listaSalariosAcima2500.push(salarioComAumento);
      atualizarListaSalariosAcima2500();
    }
    document.getElementById("novoSalario").value = "";
  }
}

function atualizarListaSalarios() {
  const listaSalariosElement = document.getElementById("listaSalarios");
  listaSalariosElement.innerHTML = "";
  listaSalarios.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `Salário original: ${item.original.toFixed(2)} | Salário com aumento: ${item.aumento.toFixed(2)}`;
    listaSalariosElement.appendChild(li);
  });
}

// funçao para realizar o aumento de acordo com o valor inserido ser maior ou menor que 2000
function calcularAumento(salario) {
  if (salario <= 2000) {
    return salario * 1.15;
  } else {
    return salario * 1.10;
  }
}

function atualizarListaSalariosAcima2500() {
  const salariosAcima2500Element = document.getElementById("salariosAcima2500");
  salariosAcima2500Element.innerHTML = "";
  listaSalariosAcima2500.forEach(salario => {
    const li = document.createElement("li");
    li.textContent = salario.toFixed(2);
    salariosAcima2500Element.appendChild(li);
  });
}

function limparListas() {
  listaSalarios.length = 0;
  listaSalariosAcima2500.length = 0;
  atualizarListaSalarios();
  atualizarListaSalariosAcima2500();
}
