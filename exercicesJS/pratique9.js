const title = document.body.getElementsByTagName("h1");
const box = document.body.getElementsByTagName("div");

const maxHeight = box[0].clientHeight; // On stocke la hauteur intérieure en px de box[0]
const maxWidth = box[0].clientWidth; // On stocke la largeur intérieure en px de box[0]

title[0].style.position = "relative";
let topPos = 0; // Position de départ en haut
let leftPos = 0; // Position de départ a gauche
let forceH = -2; // Force a laquelle l'objet va se déplacer en hauteur
let forceW = -2; // Force a laquelle l'objet va se déplacer en largeur

function animation() { //function qui va guider l'animation
    if (topPos == 0) { // Si la position de départ est tout en haut
        forceH *= -1; // Alors on fait passer forceH en valeur positive (-2 x -1 = 2)
    }
    else if (topPos == maxHeight - title[0].offsetHeight) { // Sinon si la position de départ est égale au maximum de la hauteur (500px) - la hauteur du titre
        forceH *= -1; // Alors on fait passer la valeur de forceH en négative
    }

    // On refait la même chose avec la largeur
    if (leftPos == 0) {
        forceW *= -1;
    }
    else if (leftPos == maxWidth - title[0].offsetWidth) {
        forceW *= -1;
    }

    // topPos = topPos + forceH
    topPos += forceH;
    // leftPos = leftPos + forceW
    leftPos += forceW;

    // La position haute du titre est égale a topPos
    title[0].style.top = topPos + "px";
    // La position de gauche du titre est égale a leftPos
    title[0].style.left = leftPos + "px";

    requestAnimationFrame(animation); // On répète l'animation a l'infini
}

requestAnimationFrame(animation); // Permet de faire une animation