const dontLeaveThisPage = document.querySelector("h1"); // Slectionne h1

addEventListener("mouseout", function() { // Event si la souris quitte la page
    dontLeaveThisPage.style.display = "block"; // On affiche le h1
});