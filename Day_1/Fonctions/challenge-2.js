// cheallenge 2
const prompt = require('prompt-sync')();
let agehumain = +prompt("entre l'age du humain");
//let Agechien = calculerAgechien();
function calculerAgechien(agehumain) {
   
    return agehumain * 7;
}
//calculerAgechien(Agechien);
console.log(calculerAgechien(agehumain));