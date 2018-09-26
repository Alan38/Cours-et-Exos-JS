addEventListener("click", function(event) {
    const img = document.createElement("img"); // On stock la création d'une balise img
    const imgSize = 200;

    img.setAttribute("src", `https://loremflickr.com/${imgSize}/${imgSize}`); // On ajoute l'attribut a l'image
    img.style.position = "absolute"; // On fixe la position a "absolute" de l'img

    // on ajoute la position de l'img par rapport a l'endroit du click
    img.style.top = `${event.y - imgSize / 2}px`;
    img.style.left = `${event.x - imgSize / 2}px`;

    document.body.appendChild(img); // On affiche l'img

    console.log(event); // AFfiche les propriété de l'event
    console.log(event.x, event.y); // Affiche la position du curseur de la souris
});