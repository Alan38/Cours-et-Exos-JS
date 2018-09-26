//------------------- Opérateurs de calculs spéciaux -----------------//
var a = 10;
var b = 12;
var c = 15;
var d = 5;

a += 10; // a est égale a lui même + 10
b -= 10; // b est égal a lui même - 10
c *= 10; // c est égal a lui même * 10
d /= 10; // d est égal a lui-même / 10

console.log(a); // Affiche le résultat de a + 10
console.log(b); // Affiche le résultat de b - 10
console.log(c); // Affiche le résultat de c * 10
console.log(d); // Affiche le résultat de d / 10

//------------- Afficher une chaine de caractère avec des variables dans la console -----------------//
var nom = "Alan";
var age = 25;

var result = "Bonjour " + nom + " , tu as " +  age + "ans.";

console.log(result); // Affiche "Bonjour Alan, tu as 25ans."

//----------------- Connaitre la taille d'une chaine de caractère ---------------------//
var nom = "Lazzarotto";

console.log(nom.length); // Affiche 10

//--------------- Accéder a un endroit précis dans une variable --------------------//
var nom = "Jean-Louis";

console.log(nom[3]); // Affiche "n"
console.log(nom[nom.length - 1]); // Affiche la dernière lettre

//---------------- Modifier une lettre d'une chaine -------------------//
var nom = "Alani";
nom[nom.length - 1] = "";

console.log(nom); // Affiche "Alani", une variable de type string est immutable

//---------------- Les Tableaux -----------------//
var nom = "Alan";
var age = 25;

var array = []; // Tableau vide
var stats = ["1.70", "58kg"]; // Tableau avec 2 variables a l'intérieur
var personne = [nom, age, stats]; // Tableau avec les 2 variables + le tableau stats

console.log(array);
console.log(stats);
console.log(personne);
console.log(personne[0]); // Affiche le 1er élément du tableau
console.log(personne[2][0]); // Affiche le 3eme élément du tableau "personne", et on accède ensuite au 1er élément du tableau "stats"

personne[1] = 26;
personne[2][1] = "59kg";
console.log(personne[1] + "ans - " + personne[2][1]); // Affiche "26ans - 59kg"

console.log(personne.length); // Affiche le nombre d'éléments dans le tableau personne
console.log(personne[2][0].length); // Affiche la longueur de l'élément situé dans le tableau "stats", qui est situé a l'intérieur du tableau "personne"

var arr = [1, 2, 3];

arr.push(4); // Ajoute un élément a la fin du tableau
console.log(arr); // Affiche un tableau [1, 2, 3, 4]

var pop = arr.pop(); // Retirer le dernier élément du tableau "arr" et le stocke dans la variable "pop"
console.log(arr);  // Affiche [1, 2, 3]
console.log(pop);  // Affiche la dernier élément qui a été retiré du tableau, donc "4"

arr.unshift(0); // Ajoute un élément au début du tableau
console.log(arr); // Affiche [0, 1, 2, 3]

arr.shift(); // Retire le premier élément du tableau
// on peut stocker aussi l'élément retiré dans une variable, exemple : var shift = arr.shift()
console.log(arr); // Affiche [1, 2, 3]

//----------------- Les functions ---------------//
function soustraction(a, b) { // Nommage de ma function
    console.log(a - b); // Ce que la function fait
}

soustraction(5, 3); // Affiche le somme de 5 - 3, donc "2"

//--------------- Notion de scope -----------------//
var num = 5; // Assignation d'une variable globale

function displayNum() {
    var num = 7; // Assignation d'une variable uniquement dans le cadre de la function
    console.log(num); // Affiche "7"

    function test() {
        var testVar = "test";
        console.log(testVar); // Affiche "test"
    }
    test(); // Appel de la function
}

displayNum(); // Appel de la function "displayNum" et affiche "7" et "test"
console.log(num); // Affiche la variable globale "5"

//----------------- Retourner une valeur -------------------//
var num = 12;
var otherNum = 10;

function multiply(a, b) { // function qui multiplie a par b
    return a * b; // retourne le résultat
}

result = multiply(num, otherNum); // On enferme le résultat de la function avec ses parametres dans une variable

console.log(result); // On affiche la variable qui contient le résultat de la function

//---------------- Les boolean ------------------//
var a = 10;
var b = 11;

console.log(a == b); // Est-ce que a est égal a b ? Affiche false
console.log(a == 10); // Est-ce que a est égal a 10 ? Affiche true
console.log(a != b); // Est-ce que a est différent de b ? Affiche true

//-------------- Conditions ternaires -----------------//
var a = 25;
var m = 18;

result = a == b ? "oui" : "non"; // Est-ce que a est égale à b ? Si oui affiche "oui" : sinon affiche "non";
result2 = a != b ? "oui" : "non"; // Est-ce que a est différent de b ? Si oui affiche "oui" : sinon affiche "non";
result3 = a > b ? "oui" : "non"; // Est-ce que a est supérieur à b ? Si oui affiche "oui" : sinon affiche "non";
result4 = a <= b ? "oui" : "non"; // Est-ce que a est inférieur ou égal à b ? Si oui affiche "oui" : sinon affiche "non";

// On encapsule le résulat dans une variable result, result2, result3 et result4

console.log(result); // Affiche non
console.log(result2); // Affiche oui
console.log(result3); // Affiche oui
console.log(result4); // Affiche non

//----------------- Opérateurs de comparaisons spéciaux -----------------//
var a = 10;
var b = 20;

console.log(a == a && b == b ? "vrai" : "faux"); // Est-ce que a est égal à a, ET que b est égale à b ? Si oui affiche "vrai" : sinon affiche "faux";
console.log(a == a && a == b ? "vrai" : "faux"); // Est-ce que a est égal à a, ET que a est égale à b ? Si oui affiche "vrai" : sinon affiche "faux";
console.log(a == a || a == b ? "vrai" : "faux"); // Est-ce que a est égal à a, OU que b est égale à b ? Si oui affiche "vrai" : sinon affiche "faux";
console.log(a == b || b == a ? "vrai" : "faux"); // Est-ce que a est égal à a, OU que b est égale à a ? Si oui affiche "vrai" : sinon affiche "faux";

//-------------------- Opérateur strict ---------------------//
var a = 10;
var b = "10";

var result = a === b ? "Oui" : "Non"; // Est-ce que a est strictement égal à b ? (Comparaison du type de variable)
var result2 = a !== b ? "Oui" : "Non"; // Est-ce que a est strictement différent de b ? (Comparaison du type de variable)

// On encapsule le résulat dans une variable result et result2

console.log(result); // Affiche "Non"
console.log(result2); // Affiche "Oui"

//----------------------- Conditions If / Else ---------------------//
function areYouStrong(force) { // Function qui calcule si une personne est forte ou non, avec un parametre "force"
    if (force >= 15) {
        return "You're very strong !";
    }
    else if(force >= 10) {
        return "You're strong !";
    }
    else if(force >= 5 && force < 10) {
        return "You're bad..";
    }
    else {
        return "You're very bad......";
    }
}

var strongOrNot = areYouStrong(10);
console.log(strongOrNot); // Affiche "You're strong !"

//---------------------- Les objets -----------------------//
var chevalier = { // Un objet chevalier avec plusieurs caractéristiques
    "force": 15, // sa force
    "vitesse": 5, // sa vitesse
    "faiblesse": ["mage", "assassin"] // ses points faibles sous forme de tableau
};

var UserRequete = "vitesse"; // Simulation d'une requete utilisateur

console.log(chevalier.force); // Accéder a la valeur de la force de l'objet chevalier
console.log(chevalier[UserRequete]); // Accéder a la vitesse du chevalier en utilisant la requete de l'utilisateur
console.log(chevalier.faiblesse[0]); // Accéder a la propriété faiblesse de l'objet, tout en choisissant une faiblesse spécifique
// OU
console.log(chevalier.faiblesse[1]);

//-------------------- Manipuler les objets -------------------------//
var chevalier = {
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["mage", "assassin"]
};

// Si je veux augmenter sa force
chevalier.force = 20;
console.log(chevalier);

// Si mon chevalier trouve une arme
chevalier.arme = "épée"; // Une propriété est soit créee, soit mise a jour si elle n'existe pas
console.log(chevalier);

// Si je veux supprimer son épée et réduire sa force mais augmenter sa vitesse
delete chevalier.arme
chevalier.force = 15;
chevalier.vitesse = 10;
console.log(chevalier);

//-------------------- Aller plus loin avec les objets ---------------------//
var chevalier = {
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["mage", "assassin"],
    "compagnon": { // Création d'un objet a l'intérieur de l'objet chevalier
        "animal": "chien",
        "soutien": "écuyer"
    }
};

var recettes = {
    "recette1": {
        "ingrédients": ["fleur de lotus", "ambre jaune", "diamant rouge"],
        "nom": "ma recette numéro 1",
        "cuisson": 15
    },
    "recette2": {
        "ingrédients": ["fleur d'oranger", "origami", "avion en papier"],
        "nom": "ma recette numéro 2",
        "cuisson": 12
    }
}

// Savoir si un objet a telle ou telle propriété
console.log(chevalier.hasOwnProperty("arme"));

// Accéder a la propriété de l'objet compagnon dans l'objet chevalier
console.log(chevalier.compagnon.animal);

// Accéder a la recette 1, ingrédient n°2
console.log(recettes.recette1.ingrédients[1]);

// Accéder a la recette 2, temps de cuisson
console.log(recettes.recette2.cuisson);

//---------------------- Les boucles While ---------------------//
var i = 1; // Assignation d'un variable i a 1

while (i < 6) { // Tant que i est inférieur a 6
    console.log(i) // Affiche la valeur de i
    i++; // Incrémentation de 1
}

// Autre exemple avec un tableau
i = 0;
var triangle = [];

while (i < 10) {
    triangle.push('#');
    console.log(triangle);
    i++;
}

// Autre exemple avec une variable simple
var i = 0;
var triangle = "";

while (i < 10) {
    triangle += " #";
    console.log(triangle);
    i++;
}

//----------------- Les boucles for ------------------//
var triangle = "";

for (var i = 10; i > 0; i--) {
    triangle += " #";
    console.log(triangle);
}

//--------------- Boucle dans un boucle --------------------//
function plusUn(array) { // Function qui va ajouter +1 a chacuns des tableaux
    for (var i = 0; i < array.length; i++) { // Première boucle qui va parcourir les éléments du 1er tableau
        for (var j = 0; j < array[i].length; j++) { // Deuxième boucle qui va parcourir les éléments des sous-tableaux
            array[i][j] += 1; // On ajoute +1 a chacun des éléments du sous-tableau
        }
    }
    return array; // On retourne le tableau a la fin
}

console.log(plusUn([[1, 2], [3, 4], [5, 6]])); // Affiche le tableau "PlusUn" avec tout les éléments qui ont pris +1

//------------------ Générer un nombre aléatoire DECIMAL ------------------------//
var random = Math.random(); // Math.random permet de générer un nombre aléatoire décimal entre 0 et 1 si aucun parametre n'est passé a la function random
var random2 = Math.random() * 5; // Génère un nombre décimal entre 0 et 5

console.log(random); // Affiche le nombre généré
console.log(random2);

// Autre exemple de génération de nombre aléatoire ENTIER
// Math.floor arrondi la valeur du chffre aléatoire généré par Math.random au premier entier en dessous
var random = Math.floor(Math.random() * 6); // Génère un nombre entier entre 0 et 5
var random2 = Math.floor(Math.random() * 6 + 1) // Génère un nombre entier entre 1 et 6

console.log(random);
console.log(random2);

// Générer un nombre aléatoire compris en un minimum et un maximum
function minMaxRandom(min, max) { // Function qui génère un nombre aléatoire entier entre un min et un max
    var random = Math.floor(Math.random() * (max - min + 1) + min); // random = Arrondi(le nombre aléatoire * (10 - 5 + 1) + 5)
    return random;
}

console.log(minMaxRandom(5, 10));

//---------------------- La Méthode Map & Function anonyme ---------------------//
var arr = [1, 2, 3, 4, 5]; // Variable avec un tableau
var arrPlusUn = arr.map(function(nombre) { // "map" parcours le tableau 1 à 1, et on passe une function anonyme en parametre
    return nombre + 1; // la fonction se contente d'ajouter + 1 a chaques valeurs du tableau
});

console.log(arrPlusUn); // On affiche la variable arrPlusUn, qui contient le tableau final
