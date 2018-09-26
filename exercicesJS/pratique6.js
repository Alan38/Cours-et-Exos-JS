// Parcourir un tableau et ajouter +1 a chaque nombre a l'intérieur
function plusUn(...elements) { // Fonction qui prend en paramètre tous les éléments qu'on lui donne
    const array = [...elements]; // Création d'un tableau avec a l'intérieur tous les éléments récupérés
    return array.map(num => num + 1); // Parcourir le tableau, ajouter + 1 à chaques éléments et renvoyer le résultat
}

console.log(plusUn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Affiche le résultat de la fonction plusUn