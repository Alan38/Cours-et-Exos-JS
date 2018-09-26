//-------------- Faire scroller une page avec précision -----------------//
const titles = document.body.querySelectorAll("h1"); // Stocke les h1 dans une nodeList
const links = document.body.querySelectorAll("button"); // Stocke button dans une nodeList

function goToTitle(title) { // Function qui permet de scroll jusqu'a un titre
    const distance = title.offsetTop; // Variable qui contient la distance du titre par rapport au haut de page
    window.scrollTo(0, distance); // On fait scroller la page jusqu'a la distance voulue
}

for (let i = 0; i < links.length; i++) { // Boucle qui ajoute un event sur tout les <button>
    links[i].addEventListener("click", function() { // On ajoute l'event sur le click
        goToTitle(titles[i]); // On execute la function faite plus haut
    });
}
