const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;
        // Remove .selected de todos os itens
        liElementCollection.forEach(function(el) {
            el.classList.remove("selected");
        });
        // Adiciona .selected ao item clicado
        liElement.classList.add("selected");
    });
});