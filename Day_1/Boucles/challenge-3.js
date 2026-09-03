// Challenge 3 : Somme des nombres
var prompt = require('prompt-sync')();
var n = Number(prompt('Donner N : '));
let somme = 0;
for (i = 1; i <= n; i++) {
    somme = somme + i;
  //  console.log(somme);
   // console.log('Somme = ' + somme);
}
console.log('Somme = ' + somme);