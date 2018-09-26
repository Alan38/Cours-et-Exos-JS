const title = document.querySelector("h1"); // On récupère le <h1>

const texte = setTimeout(function() { // setTimeout permet de déclencher un script après un temps donné
    title.textContent = "Le Javascript s'apprend avec patience !"; // On écrit dans <h1>
    title.style.opacity = 1; // On fixe l'opacité a 1
    document.body.style.background = "#FB1"; // On ajoute un background-color sur le body
}, 1000); // Tout ça après 1 sec