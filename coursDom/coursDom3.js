//-------------- Changer une liste déléments en Array ----------------------//
const text = document.body.getElementsByTagName("p");
const textArray = Array.from(text); // Transforme une collectionHTML en tableau

textArray.map(paragraphe => paragraphe.innerHTML = "AHAHAH j'ai remplacé le texte easy money !");
// On parcours le tableau textArray grace a .map
// Pour chaque paragraphe trouvé dans le tableau
// On insère dans le paragraphe "AHAHAH etc..."

//-------------- Récupérer la taille d'un élément ---------------------//
const title = document.getElementById("titre");

console.log(title.offsetHeight); // Affiche la hauteur de l'élément dans sa globalité
console.log(title.offsetWidth); // Affiche la largeur de l'élément dans sa globalité
console.log(title.clientHeight); // Affiche la hauteur de l'élément sans compter les bordures
console.log(title.clientWidth);// Affiche la largeur de l'élément sans compter les bordures

//------------------- Modifier le style ------------------------//
title.style.color = "red"; // Modifie la couleur du titre en rouge
title.style.fontFamily = "Arial"; // Modifie le style d'écriture en "Arial"
title.style.boxShadow = "2px 2px rgba(0,0,0,0.3)"; // Ajoute un ombrage sur le border

for(let i = 0; i < text.length; i++) { // Boucle qui parcours la HTMLcollection contenant les <p>
    if (i == 0) { // Si i = 0
        text[i].style.borderBottom = "3px solid pink"; // Ajoute un border-bottom sur le 1er <p>
    }
    else { // Sinon
        text[i].style.fontSize = "24px"; // Ajoute une font-size de 24px sur le 2ème <p>
    }
}