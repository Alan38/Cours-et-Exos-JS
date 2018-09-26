const textArea = document.querySelector("textarea"); // Variable contenant le <teaxtarea>
const render = document.querySelector("div"); // Variable contenant la <div>

// localStorage stock sur l'ordinateur de l'utilisateur les données dernierement tapées
textArea.value = localStorage.getItem("text"); // La valeur de textArea est égale a la valeur des donées stockées ayant pour clé "text"

if (textArea.value) { // Si la valeur de <textarea> existe
    render.innerHTML = marked(localStorage.getItem("text"));
    // Alors on crée dans la div des éléments HTML avec la valeur des données stockées ayant pour clé "text"
}

textArea.addEventListener("keyup", function(event) { // Event sur le <textarea> de type "keyup"
    localStorage.setItem("text", textArea.value); // On stocke localement un objet text, qui aura pour contenu la valeur de <textarea> à chaque touché relachée
    render.innerHTML = marked(textArea.value); // On affiche le rendu "marked" dans la <div> a chaque touche relachée
});