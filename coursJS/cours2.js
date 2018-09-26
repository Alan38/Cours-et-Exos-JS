//---------------- Nouveautée ES6 ----------------------//
//-----------------------------------------------------------//

//---------------- VAR & LET -------------------//
var arme = "épée";

if (arme == "épée") {
    var force = 15;
}

console.log(force); // Affiche la variable "force" alors qu'elle est déclarée au sein d'un block IF {}, on parle donc de variable générale

// Mais maintenant, si on veut qu'une variable ne soit accéssible qu'au sein d'un bloc on peut utiliser "let" à la place de "var"
if (arme == "épée") {
    let force2 = 15;
}

// console.log(force2);
// Affiche une erreur comme quoi "force2" n'est pas défini

// Utiliser "let" à la place de "var" est donc beaucoup plus propre, et permet d'avoir un code plus lisible & plus structuré

//------------------- CONST -------------------------//
const weapon = "dague"; // Déclaration d'une variable constante
// weapon = "lance";
// Affiche une erreur comme quoi on ne peut pas changer la valeur d'une variable const

// Par contre je peux modifier une valeur située dans un objet:
const perso = { // Déclaration d'une constante perso qui contient un objet avec plusieurs propriétés
    nom: "Jon Snow",
    force: 15,
    arme: "épée"
};

perso.nom = "Peter"; // Je modifie la valeur d'une propriété
console.log(perso); // Ca marche, la propriété a bien été modifiée

// Par contre je ne peux pas modifier l'objet dans sa globalité
const perso2 = { // Déclaration de l'objet
    nom: "Naruto",
    force: "2000",
    arme: "ninjutsu"
};

// perso2 = { // Modification de l'objet dans sa globalité
//     nom: "Jean-Louis-David",
//     force: "2000",
//     arme: "ninjutsu"
// };

// console.log(perso2); // Affiche une erreur

//EN GROS:
// 1. "const" par défaut
// 2. "let" si besoin de mettre a jour la variable
// 3. Plus jamais de "var"

//-------------------------------- Les templates strings ---------------------------------//
const perso3 = { // Déclaration de l'objet
    nom: "Ichigo",
    force: "2500",
    arme: "Zanpakuto"
};

// Avec l'ancienne norme javascript basique
const text = perso3.nom + " a une force de " + perso3.force + " et un " + perso3.arme + "."; // Manière d'afficher un string avec des variable à l'intérieur.
console.log(text);

// Avec la nouvelle norme javascript ES6
const text2 = `${perso3.nom} a une force de ${perso3.force} et un ${perso3.arme}.`; // Nouvelle manière d'afficher un string avec des variable à l'intérieur.
console.log(text);
// `` se fait avec Alt Gr + 7

//---------------------------- Cas concret avec des templates strings ----------------------------//
const perso4 = {
    nom: "Edward Elric",
    force: "1050",
    arme: "Alchimie"
};

const text3 = `${perso4.nom ? perso.nom : "Alan"} est mon nom.`;
const text4 = `
<ul>
    <li>Nom: ${perso4.nom}</li>
    <li>force: ${perso4.force}</li>
    <li>arme: ${perso4.arme}</li>
</ul>
`;

console.log(text3);
console.log(text4);

//----------------------------- Fonctions fléchées -------------------------------//
const tab = [1, 2, 3, 4, 5];
const tabPlusUn = tab.map(function(nombre) { // Function qui parcours le tableau et qui ajoute +1 a chaque nombre et le retranscrit en strings
    return `${nombre} + 1 = ${nombre + 1}`;
});

const tab2 = [1, 2, 3, 4, 5];
const tabPlusUn2 = tab.map((nombre) => { // "function(nombre)" est remplacé par "(nombre) =>"
    return `${nombre} + 1 = ${nombre + 1}`;
});

const tab3 = [1, 2, 3, 4, 5];
const tabPlusUn3 = tab.map(nombre => { // "(nombre) =>" est remplacé par "nombre =>"
    return `${nombre} + 1 = ${nombre + 1}`;
});

const tab4 = [1, 2, 3, 4, 5];
const tabPlusUn4 = tab.map(nombre => `${nombre} + 1 = ${nombre + 1}`); // On peut même enlever les {} pour faire encore plus court

console.log(tabPlusUn);
console.log(tabPlusUn2);
console.log(tabPlusUn3);
console.log(tabPlusUn4);

//----------------------------- Parametres par defaut dans les fonctions ------------------------------//
function disMonNom(nom) { // fonction simple qui renvoie une string
    console.log(nom);
}

disMonNom("Alan"); // Affiche "Alan"
disMonNom();

function disMonNom2(nom = "No Name") { // Ici le string "No Name" sera affecté a "nom" si jamais "nom" est vide
    console.log(nom);
}

disMonNom("Alan");
disMonNom2(); // Affiche "No Name"

//---------------------------- Destructuring avec un objet ------------------------------//
const player = { // Un objet basique
    nom: "Alan",
    type: "Mage",
    armes: "Livre"
}

const { nom, type, armes = "Mains nues" } = player; // Création d'une variable avec les propriétés de l'objet "player" + la propriété "armes" avec une valeur par défaut

console.log(player); // Affiche l'objet
console.log(nom, type, armes); // Affiche les propriétés de l'objet "player"

//------------------------ Destructuring de tableaux --------------------------------//
const stats = [154, 12, 78, 28]; // Un tableau

const [ attaque, défense, vitesse, magie ] = stats; // Création d'une variable avec les éléments du tableau

console.log(stats); // Affiche le tableau
console.log(attaque, vitesse, défense); // Affiche les valeur demandés du tableau

//------------------------ Intervertir des valeurs ----------------------------//
let maCarte = "Dracaufeu";
let taCarte = "Roucoul";

console.log(maCarte, taCarte); // Affiche "Dracaufeu" "Roucoul"

// On pourrait faire comme ceci:
// let temp = maCarte;
// maCarte = taCarte;
// taCarte = temp;

// Avec ES6 c'est plus simple:
[maCarte, taCarte] = [taCarte, maCarte]; // On intervertit les valeurs des variables

console.log(maCarte, taCarte); // Affiche "Roucoul" "Dracaufeu"

//----------------------- Le Spread Operator --------------------------//
const friendList = ["Cédric", "Omar", "Valentin"];
const familyList = ["David", "Catherine", "Jean-Pol"];
const list = [...friendList, ...familyList];


console.log(...friendList, ...familyList); // Affiche tous les éléments du/des tableau(x)
// ... = Prend tout ce qu'il y a dans le tableau et affiche le

console.log(list); // Affiche tous les élément de friendList et familyList dans un seul tableau

//------------------------ Cas pratique Spread Operator -----------------------//
const randomList = ["Omar", "David", "Iléo", "Lyouris"];

const [ ami1, ami2, ...animaux] = randomList;

console.log(ami1); // Affiche "Omar"
console.log(ami2); // Affiche "David"
console.log(...animaux); // Affiche "Iléo" & "Lyouris"
console.log(animaux); // Affiche un tableau contenant le reste de "randomList" (Iléo & Lyouris);
