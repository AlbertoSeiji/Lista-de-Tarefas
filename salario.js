// criando o array de salários
const salarios = [1500, 2200, 1000, 2500, 2300, 1900, 2800, 1700, 2650, 1950];

// usando o método map() para aplicar os aumentos de salário
const salariosAumentados = salarios.map(salario => {
  if (salario <= 2000) {
    // aumento de 15%
    return salario * 1.15;
  } else {
    // aumento de 10%
    return salario * 1.10;
  }
});

// usando o método filter() para filtrar os salários acima de 2500
const salariosSuperiores2500 = salariosAumentados.filter(salario => salario > 2500);

// usando o método reduce() para somar os salários
const totalSalarios = salariosAumentados.reduce((acumulador, salario) => acumulador + salario, 0);

// mostrar os valores
console.log("Salários originais:", salarios);
console.log("Salários com aumentos:", salariosAumentados);
console.log("Salários acima de 2500:", salariosSuperiores2500);
console.log("Total de salários:", totalSalarios);
