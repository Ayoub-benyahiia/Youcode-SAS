// Challenge 2 : Calculateur d'Âge chien

let prompt = require('prompt-sync')();
let ageHumain = +prompt('entrer lage  ? ');
let agechien = calculerAgeChien(ageHumain);
function calculerAgeChien(ageHumain){
    return ageHumain *7;
}
//calculerAgeChien(ageHumain);
console.log("l'age de chien est :" + agechien)
