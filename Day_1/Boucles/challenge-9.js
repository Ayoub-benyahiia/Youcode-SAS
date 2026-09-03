// Challenge 10 : Saisie jusqu'à une valeur spécial
const prompt = require('prompt-sync')();
let nb ;
let conter =0;
let somme =0;
do {
     nb = Number(prompt('entre les nombre : '));
     somme = somme + nb
     conter++;
}
while (nb != 0) {

}
console.log("nombre de valeurs saisies "+ (conter -1))
console.log("La somme des valeurs est : " + somme);