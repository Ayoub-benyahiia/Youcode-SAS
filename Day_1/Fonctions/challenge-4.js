// Challenge 4 : Salutation Personnalisée avec Valeur par Défaut
let prompt = require('prompt-sync')();

let nom = prompt("entre your name : ")
let titre = prompt("entre your titre : ")
function SaluerClient(nom, titre =" Client"){
    return " Bonjour " + nom + " " + titre
}
if(titre == ""){
welcome = SaluerClient(nom);
console.log(welcome)
}
else{
    welcome = SaluerClient(nom, titre);
    console.log(welcome)
}