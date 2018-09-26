const images = document.querySelectorAll("img"); // Récupération des images dans une nodeList
const imagesArray = Array.from(images); // On transforme la nodeList en Array

imagesArray.map((img, index) => img.addEventListener("load", function() { // On parcours l'array avec "map" et on ajoute l'event load
    console.log(`Function Map: Image n°${index + 1} - OK`); // Quand une image sera chargée, affiche ceci
}));

// Même chose avec une boucle for et pas besoin de convertir la nodeList en Array
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("load", function() {
        console.log(`Boucle For : Image n°${i + 1} - OK`);
    });
}