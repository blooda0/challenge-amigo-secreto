document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("amigo");
    const addButton = document.querySelector(".button-add");
    const drawButton = document.querySelector(".button-draw");
    const nameList = document.getElementById("listaAmigos");
    const result = document.getElementById("resultado");
    
    let names = [];

    addButton.addEventListener("click", function () {
        const name = input.value.trim();
        if (name && !names.includes(name)) {
            names.push(name);
            updateNameList();
            input.value = "";
        }
    });

    drawButton.addEventListener("click", function () {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length);
            result.innerHTML = `<li>Ganador: ${names[randomIndex]}</li>`;
        } else {
            result.innerHTML = "<li>No hay nombres para sortear.</li>";
        }
    });

    function updateNameList() {
        nameList.innerHTML = names.map(name => `<li>${name}</li>`).join("");
    }
});
