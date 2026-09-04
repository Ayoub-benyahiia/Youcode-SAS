// Challenge 5 : Le Somateur Universel (Rest Parameter)
const prompt = require('prompt-sync')();
function getuserinput(){
    let motDePasse = prompt("entre your mote de pass : ");
    return motDePasse;
}
// let motDePasse = prompt("entre your mote de pass : ");

function verifierMotDePasse(password) {
    if (password.length >= 8 && password.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}
let input = getuserinput()
let output = verifierMotDePasse(input);
console.log(output);