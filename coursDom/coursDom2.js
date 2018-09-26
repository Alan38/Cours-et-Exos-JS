function addText(pseudo, myText) {
    const newText = document.createElement("p"); // Crée un élément Html, ici <p></p>
    newText.innerHTML = `<strong>${pseudo}:</strong> ${myText}`; // Insert du code Html dans l'élément <p></p>

    document.body.appendChild(newText); // Ajoute newText a la fin body
}

addText("Alan38", "Salut salut !"); // Ajoute "Alan38: Salut salut !"
addText("Jennifer07", "Salut Alan, je t'attendais.");
addText("Alan38", "Ah ! Excuse moi, je suis un homme désiré lol :p");

const link = document.body.getElementsByTagName("a"); // On cible les liens <a> dans un tableau

link[0].setAttribute("href", "https://fr-fr.facebook.com/jennifer.catarina.31"); // On modifie le href du lien[0] du tableau link

const linkAttribute = link[0].getAttribute("href"); // Variable qui contient l'attribut "href" du lien [0] du tableau link