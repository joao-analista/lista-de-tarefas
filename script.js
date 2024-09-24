// criar tarefas
let Tarefas = [];

// campo de entrada
let inputTarefas = document.getElementById('tarefa');
// botão que o usuário vai clicar
let botaoCadastrar = document.getElementById('add');
// lista de elementos que será exibida
let listaTarefas = document.getElementById('listadetarefas');

// função para listar os elementos na tela
function atualizarLista() {
    listaTarefas.innerHTML = ""; // limpar a lista atual
    Tarefas.forEach((tarefa, index) => { 
        // criar um elemento para cada tarefa
        let li = document.createElement('li');
        li.textContent = tarefa; // Use 'tarefa' para mostrar o item
        // adicionar o item na lista
        listaTarefas.appendChild(li);
    });
}

// codar o botão cadastrar
botaoCadastrar.onclick = () => {
    let novaTarefa = inputTarefas.value.trim(); // Use 'value' minúsculo
    if (novaTarefa) {
        Tarefas.push(novaTarefa); // adicionar uma nova tarefa
        atualizarLista(); // Atualiza a lista
        inputTarefas.value = ""; // Limpa o campo de entrada
    }
};

