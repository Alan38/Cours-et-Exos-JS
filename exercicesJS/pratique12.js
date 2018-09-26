//--------------- Bar de pourcentage en fonction du scroll ---------------//
const bar = document.querySelector(".bar"); // Variable contenant la div .bar

addEventListener("scroll", function() { // Ajout d'un event sur la page entière
    const bodyHeight = document.body.scrollHeight - innerHeight; // Variable qui contient la taille de la page
    const percentage = pageYOffset / bodyHeight * 100; // Variable contenant le pourcentage du scroll

    bar.style.width = percentage + "%"; // la lagruer de la bar correspondra au pourcentage du scroll de la page

    console.log(`
    Taille Page: ${bodyHeight}
    Taille Affichage: ${innerHeight}
    Position Scroll: ${pageYOffset}
    `);
});