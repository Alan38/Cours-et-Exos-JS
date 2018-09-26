const textArea = document.querySelector("textarea");
const twittButton = document.querySelector("button");

textArea.addEventListener("keyup", function() { // Event sur <textarea> sur une touche relachée
    twittButton.disabled = textArea.value.length > 140 ? true : false; // On désactive le button si la longuer de la valeur de <textarea> est supérieure a 140 caractère
});