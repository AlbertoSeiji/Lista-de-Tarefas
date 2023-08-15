document.addEventListener('DOMContentLoaded', function () {
    // obtém o formulário e a lista de tarefas pelo ID
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // array para armazenar as tarefas
    let tasks = [];

    // adiciona um evento ao formulário para lidar com o envio
    taskForm.addEventListener('submit', function (event) {
        // Impede o comportamento padrão do formulário
        event.preventDefault();

        // obtém os valores dos campos do formulário pelo id
        const tarefaInput = document.getElementById('tarefaInput');
        const descricaoInput = document.getElementById('descricaoInput');
        const autorInput = document.getElementById('autorInput');
        const departamentoInput = document.getElementById('departamentoInput');
        const importanciaSelect = document.getElementById('importanciaSelect');

        // obtem os valores dos inputs de diferentes lugares, removendo os espaçoes em branco
        const tarefa = tarefaInput.value.trim();
        const descricao = descricaoInput.value.trim();
        const autor = autorInput.value.trim();
        const departamento = departamentoInput.value.trim();
        const importancia = importanciaSelect.value;

        // verifica se todos os campos foram preenchidos
        if (tarefa === '' || descricao === '' || autor === '' || departamento === '') {
            alert('Por favor, preencha todos os campos antes de adicionar a tarefa.');
            return;
        }

        // cria elementos HTML para exibir as informações da tarefa
        const newTaskItem = document.createElement('li');
        const taskInfoContainer = document.createElement('div');
        taskInfoContainer.classList.add('task-info');

        // preenche as informações do formulario na li
        taskInfoContainer.innerHTML = `
            <strong>Tarefa:</strong> ${tarefa}<br>
            <strong>Descrição:</strong> ${descricao}<br>
            <strong>Autor:</strong> ${autor}<br>
            <strong>Departamento:</strong> ${departamento}<br>
            <strong>Importância:</strong> ${importancia}
        `;

        // cria botões para adicionar valor, duração à tarefa e remover tarefa
        // criando o botao para adicionar valor a tarefa
        const adicionarValorButton = document.createElement('button');
        // texto para o botao
        adicionarValorButton.textContent = 'Adicionar Valor';
        // funcionalidade do botao
        adicionarValorButton.addEventListener('click', function () {
            // criando area para digitar o novo valor da tarefa
            const novoValor = parseFloat(prompt('Digite o novo valor:'));
            // caso nao for numero ele nao aceita o valor inserido (NaN = not-a-number)
            if (!isNaN(novoValor)) {
                // deixar o "Valor" escrito em negrito
                const valorElement = document.createElement('strong');
                valorElement.textContent = 'Valor:';
                // criando a area onde vai ser digitada o valor da tarefa
                const valorValue = document.createTextNode(` ${novoValor}`);
                // criando a div que ira englobar o valor na li
                const valorContainer = document.createElement('div');
                // adicionar o valor na li
                valorContainer.appendChild(valorElement);
                valorContainer.appendChild(valorValue);
                detailsContainer.appendChild(valorContainer);
                // stualizar a variável para indicar que o valor já foi adicionado
                valorAdicionado = true;
                // desativar o botão de adicionar valor
                adicionarValorButton.disabled = true;
            }
        });

        // criando o botao de adicionar a duraçao na tarefa
        const adicionarDuracaoButton = document.createElement('button');
        //  texto para o botao
        adicionarDuracaoButton.textContent = 'Adicionar Duração';
        // funcionalidade do botao
        adicionarDuracaoButton.addEventListener('click', function () {
            // criando o texto em cima da area onde sera colocada a duraçao da tarefa
            const novaDuracao = prompt('Digite a nova duração:');
            if (novaDuracao !== null) {
                // deixar a "Duraçao" escrito em negrito
                const duracaoElement = document.createElement('strong');
                duracaoElement.textContent = 'Duração:';
                // criando a area onde vai ser digitada a duraçao da tarefa
                const duracaoValue = document.createTextNode(` ${novaDuracao}`);
                // criando a div que ira englobar a duraçao na li
                const duracaoContainer = document.createElement('div');
                // adicionar a duraçao na li
                duracaoContainer.appendChild(duracaoElement);
                duracaoContainer.appendChild(duracaoValue);
                detailsContainer.appendChild(duracaoContainer);
                // atualiza a variável para indicar que a duração já foi adicionada
                duracaoAdicionada = true;
                // desativar o botão de adicionar duração
                adicionarDuracaoButton.disabled = true;
            }
        });

        // criando uma div para englobar o li e os botoes
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('task-details');

        // criando o botao de remover na li
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        // funcionalidade do botao
        botaoRemover.addEventListener('click', function () {
            taskList.removeChild(newTaskItem);
            tasks = tasks.filter(task => task !== newTaskItem);
        });

        // adiciona um novo valor (appendChild)
        newTaskItem.appendChild(taskInfoContainer);
        newTaskItem.appendChild(detailsContainer);
        newTaskItem.appendChild(adicionarValorButton);
        newTaskItem.appendChild(adicionarDuracaoButton);
        newTaskItem.appendChild(botaoRemover);
        taskList.appendChild(newTaskItem);

        // Adicionar a nova tarefa ao array
        tasks.push(newTaskItem); 

        // Limpar campos do formulário ao enviar para a li
        tarefaInput.value = '';
        descricaoInput.value = '';
        autorInput.value = '';
        departamentoInput.value = '';
        importanciaSelect.value = 'baixa';
    });
});
