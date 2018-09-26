var notes = [18, 15, 1 ,6, 4]; // Tableau des notes
var notes2 = [15, 9.5, 18.5, 12, 14.5, 11]; // 2eme tableau des notes
var averageNotes = averageNotesCalcul(notes); // Moyenne de toutes les notes du tableau notes en utilisant la function ci-dessous
var averageNotes2 = averageNotesCalcul(notes2); // Moyenne de toutes les notes du tableau "notes2" en utilisant la function ci-dessous

function averageNotesCalcul(array) { // function qui calcule la moyenne d'un tableau de notes

    var howManyNotes = array.length; // Combien de notes y'a t'il dans le tableau
    var result = 0; // Assignation d'une variable a 0

    for(i = 0; i < array.length; i++) { // Pour (i = 0, tant que i est inférieur a la longueur du tableau, on incrémente de 1)
        result += array[i]; // A chaque fois qu'on parcours le tableau, on ajoute la note a celle existente jusqu'a arriver a la fin du tableau
    }
    var avg = result / howManyNotes; // Assignation de la variable avg au résultat final / le nombre de notes

    if(avg >= 15) { // Si la moyenne est sup ou égal a 15
        return "Votre moyenne est de " + avg + ", c'est très bien !";
    }
    else if(avg >= 10) { // si la moyenne est sup ou égale a 10
        return "Votre moyenne est de " + avg + ", c'est bien !";
    }
    else { // Sinon
        return "Votre moyenne est de " + avg + ", convocation des parents imminente !";
    }
}

console.log(averageNotes); // Affiche la moyenne, en utilisant le résultat de la function
console.log(averageNotes2);