// Function qui mélange les valeurs d'un tableau
function randomize(arr) {
    var temp = 0; // Variable pour stocker la position actuelle du tableau
    var random = 0; // Variable pour stocker le chiffre généré aléatoirement entre 0 et 4

    for (var i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() * arr.length); // arr.length = 5, génère un nombre en 0 et 4 "[0, 1, 2, 3, 4]"
        temp = arr[i]; // On stocke la position du tableau dans une variable temp
        arr[i] = arr[random]; // La position actuelle du tableau est égale remplacé par le chiffre aléatoire
        arr[random] = temp; // La position du tableau[chiffre entre 0 et 4] est remplacé par la valeur de la position du tableau stockée dans temp
    }
    return arr; // On retourne le tableau arr
}

console.log(randomize([1, 2, 3, 4, 5])); // On affiche le nouveau tableau