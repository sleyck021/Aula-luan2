

document.addEventListener("DOMContentLoaded", async () => {

    const toDos = [
        "Estudar HTML semântico",
        "Praticar CSS básico",
        "Revisar seletores CSS",
        "Montar página com Flexbox",
        "Adicionar responsividade com media queries",
        "Estudar JavaScript básico",
        "Praticar manipulação do DOM",
        "Implementar evento de clique em botão",
        "Criar lista dinâmica com JS",
        "Estudar funções em JavaScript",
        "Aprender sobre arrays e objetos",
        "Praticar laços (for, while)",
        "Estudar fetch() e requisições HTTP",
        "Consumir API simples (ex: Pokédex)",
        "Criar mini-projeto integrando tudo"
    ];

    const listWrapper = document.getElementById("list-wrapper");
    const inputElement = document.getElementById("list-add");
    const buttonListAddElement = document.getElementsByClassName("btn")[0];

    // 1 - Criar lista inicial
    const ul = document.createElement("ul");
    toDos.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <button onclick="this.parentElement.remove()">deletar</button>`;
        ul.appendChild(li);
    });
    listWrapper.appendChild(ul);

    // 2 - Adicionar nova tarefa
    buttonListAddElement.addEventListener("click", (event) => {
        event.preventDefault();
        const value = inputElement.value.trim();
        if (value) {
            const li = document.createElement("li");
            li.innerHTML = `${value} <button onclick="this.parentElement.remove()">deletar</button>`;
            ul.appendChild(li);
            inputElement.value = "";
        }
    });


});