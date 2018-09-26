const input = document.querySelector("input"); // Récupération de l'input

input.addEventListener("focus", function() { // Fonction qui agit au focus de l'input
    input.style.backgroundColor = "#C0FFEE"; // Ajoute un background color vert
});

input.addEventListener("blur", function() { // Fonction qui agit au Unfocus de l'input
    input.style.backgroundColor = "white"; // Ajoute un background color blanc
});