const textArea = document.querySelector("textarea");
const input = document.querySelector("input");
const voyelles = ["a","e","i","o","u","y"]; // Stockage des voyelles dans un tableau

textArea.addEventListener("keypress", function(event) { // Event a l'appui d'une touche sur le <textarea>
    const key = event.key; // Variable qui contient la touche préssée

    if (voyelles.includes(key)) { // Si c'est un voyelle
        // Nothing
    }
    else if (event.keyCode == 8) { // Si la touche est un backspace
        // Nothing
    }
    else { // Sinon
        input.value += key; // La valeur de la touche est ajoutée a la valeur de <input>
    }
});

textArea.addEventListener("keyup", function(event) { // Event quand la touche est relachée sur <textarea>
    const key = event.key; // Variable qui contient la touche relachée

    if (voyelles.includes(key)) { // Si c'est une voyelle
        let valueArea = textArea.value; // On stocke la valeur du <textarea> dans une variable
        textArea.value = valueArea.substring(0, textArea.value.length - 1); // La valeur de <textarea> est égale a sa valeur moins le dernier caractère relaché (donc la voyelle)
    }

    if (event.keyCode == 8) { // Si la touche est un backspace
        let inputValue = input.value; // On stocke la valeur de <input> dans une variable

        if (inputValue.length > 0) { // Si la longueur de la valeur de <input> est supérieur a 0
            input.value = inputValue.substring(0, input.value.length - 1); // La valeur de <input> est égale a sa valeur moins le dernier caractère relaché
        }
    }

    if (textArea.value == "") { // Si la valeur de <textarea> est vide
        input.value = ""; // Alors la valeur de <input> doit aussi etre vide
    }
});

textArea.addEventListener("keydown", function(event) { // Event sur <textarea> quand la touche est maintenue
    const key = event.key; // Variable qui contient la touche maintenue

    if (voyelles.includes(key)) { // SI c'est une voyelle
        let valueArea = textArea.value; // On stocke la valeur de <textarea> dans une variable
        textArea.value = valueArea.replace(key, ""); // On remplace la valeur de la touche maintenue par ""
    }
})