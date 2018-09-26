//--------------------- Selectionner un/des élément(s) ---------------------//
const title = document.getElementById("titre"); // Séléctionne un élément par son Id
const text = document.body.getElementsByTagName("p"); // Séléctionne un élement par son Tag (balise)

console.log(title); // Affiche le <h1>
console.log(text); // Affiche un tableau avec les <p>

//--------------- Séléctionner plus précisément un élément -----------------//
const titleTag = document.querySelector("h1"); // Séléctionne le 1er élément <h1>
const titleId = document.querySelector("#titre"); // Séléctionne le 1er élément avec l'id #titre
const para = document.querySelector(".para"); // Séléctionne le 1er élément avec la classe .para
const paraAll = document.querySelectorAll(".para"); // Séléctionne tout les éléments avec la classe .para

console.log(titleTag);
console.log(titleId);
console.log(para);
console.log(paraAll);

//----------------------Déplacer des éléments -------------------------//
document.body.insertBefore(text[1], title); // Déplace le text[1] a la place de title

document.body.appendChild(title); // Déplace title a la fin de body

document.body.removeChild(title); // Supprime title

const newtext = document.createTextNode("Hello, nique ta mère !");
// createTextNode -> Crée une string
document.body.appendChild(newtext); // Déplace le etxte a la fin de body

document.body.replaceChild(newtext, text[0]); // Remplace un élément existant

