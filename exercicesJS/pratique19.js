const form = document.querySelector("form"); // Variable contenant l'élément <form>
const input = document.querySelector("input"); // Variable contenant l'élément <input>

form.addEventListener("submit", function(event) { // Event sur le <form> de type "submit"
    event.preventDefault(); // Empecher le submit de faire son action "par défaut" (rafraichir la page)
    console.log(`Message envoyé : ${input.value}`); // Affiche un message avec la valeur de l'input dans la console
    form.reset(); // On reset le <form>
    input.focus(); // On focus l'input pour pouvoir retaper dedans
});