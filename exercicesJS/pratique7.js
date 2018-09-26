//---------------- Ajouter des classe CSS ----------------------//
//------ Et la faire correspondre avec des buttons/liens -------//

const title = document.body.querySelector("h1"); // Séléction du 1er <h1>
const liens = document.body.querySelectorAll("a"); // Séléction de tout les <a>

liens[0].addEventListener("click", function() { // On place un evenement au "click" sur le 1er lien
    title.classList.add("fbi"); // on ajoute la class "fbi" a title avec "add"
});

liens[1].addEventListener("click", function () { // On place un evenement au "click" sur le 2eme lien
    title.classList.remove("fbi"); //  On supprime la class "fbi" avec "remove"
});

liens[2].addEventListener("click", function() { // On place un evenement au "click" sur le 3eme lien
    title.classList.toggle("fbi"); // "Toggle" s'occupe de faire basculer la class "fbi" sur title
});