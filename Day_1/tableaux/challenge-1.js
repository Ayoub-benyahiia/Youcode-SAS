// PARTIE 1 : 10 Challenges SANS méthodes prédéfinie

let  tableaudei = [10, 20, 30]

// Challenge 1 : Parcours et Affichage
function afficherElements(tab) {
    let i= 0; 
    for (i in tab)
    console.log(tab[i])
        i++;
    return tab
}
afficherElements(tableaudei);