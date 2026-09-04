// Challenge 3 : Générateur d'Email Professionnel
const prompt = require('prompt-sync')();

let nome = prompt("entre your name ");
let prenom = prompt("entre your prenom");

function genererEmail(pre, name) {
    return pre.toLowerCase() +"." + name.toLowerCase() + "@entreprise.com";
}
email = genererEmail(prenom, nome);
console.log(email);