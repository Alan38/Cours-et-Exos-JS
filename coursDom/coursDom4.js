//----------------- Créer un event ----------------------//
const link = document.querySelectorAll("a"); // Variable contenant le lien
const p = document.querySelector("p");

link[0].addEventListener("click", function() { // On ajoute un event sur le click du lien et on donne une fonction anonyme a cet event
    console.log("click LIEN"); // Action de la function au click
    p.style.display = "block";
});

// Autre manière de créer un event

function click() { // On crée d'abord la fonction
    console.log("click LIEN2");
    p.style.display = "block";
}

link[1].addEventListener("click", click); // Et ensuite on l'appelle directement dans l'event

//--------------- Supprimer un event -------------------//
link[2].addEventListener("click", function clickLink3() { // On ajoute un event avec une fonction nommée
    console.log("click LIEN3 une seule fois");
    link[2].removeEventListener("click", clickLink3); // On supprime l'event "click", et la function nommée
    p.style.display = "block";
}); // Ce script ne s'executera donc qu'une seule fois

// AUtre manière de supprimer un event

function click2() { // On crée la fonction
    console.log("click LIEN4 une seule fois");
    link[3].removeEventListener("click", click2); // On lui dit de supprimer l'event sur link[3]
    p.style.display = "block";
}

link[3].addEventListener("click", click2); // On crée l'event sur link[3] et elle ne s'executera qu'une fois

//------------- Surveiller le clavier de l'utilisateur ------------//

addEventListener("keypress", function(event) { // On ajoute un event a la page entière, "event" représente l'event en lui même donc "keypress"
    console.log(event.key); // On affiche dans la console la touche pressée
});
