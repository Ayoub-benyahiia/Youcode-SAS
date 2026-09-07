// Challenge 2 : Compteur d'Occurrences d'un Caractère
//onsigne :** Écrivez une fonction `compterLettre(chaine, lettre)`
//qui compte combien de fois un caractère spécifique apparaît dans une chaîne.
//Exemple :** `compterLettre("javascript", "a")` ➔ `2`.


const prompt = require('prompt-sync')()
let chaine = prompt("entre quelque choose");
//let chaine = 'javascript'

function compterLettre(chaine, lettre) {
    //let chaine = prompt("entre quelque choose");
    let i = 0;
    let counter = 0;
    for (lettre.length<) {
        // i++;
        if (chaine[i] === lettre) {
            counter++;
            //i++;
        }
        i++;
    }

    return i
}
output = compterLettre(chaine, 'a')
console.log(output)
