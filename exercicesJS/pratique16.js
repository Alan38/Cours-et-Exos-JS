const title = document.querySelector("h1"); // On prend le <h1>
let i = 3;  // Variable qui est égale a 3

title.addEventListener("click", function() { // Event au click sur le <h1>
    const compteur = setInterval(function() { // On défini un interval qui va agir toutes les X secondes
        if (i > 0) { // Si i est supérieur a 0
            title.textContent = i; // Affiche la valeur de "i" dans le <h1>
        }
        else if (i == 0) { // Si i est égal a 0
            title.textContent = "Go !"; // On affiche "Go !"
        }
        else { // Sinon
            title.textContent = "Changement du Backgroud !"; // Affiche la phrase dans le <h1>
            document.body.style.background = "#FB1"; // Changement du background du body
            clearInterval(compteur); // On stoppe le script "setInterval"
        }
        console.log(i); // Affiche la valeur de "i"

        i--; // On décrémente "i" de 1 en 1
    }, 1000); // Le script agira toutes les 1 secondes
});