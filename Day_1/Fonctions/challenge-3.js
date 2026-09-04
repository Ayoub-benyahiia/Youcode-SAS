// Challenge 3 : Générateur d'Email Professionnel
let prompt = require('prompt-sync')();
let prenom = prompt('entrer your prenom ');
let nom = prompt('entrer your nom ');
let email = genererEmail(prenom, nom);
console.log(email)
function genererEmail(prenom, nom){
    return prenom.replaceAll(" ","").toLowerCase() + "." + nom.replaceAll(" ","").toLowerCase() +"@company.com";
};