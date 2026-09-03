// Challenge 8 : Accumulation de points
var prompt = require('prompt-sync')();
var nbofmission= Number(prompt('Donner N : '));
let i = 1;
let score =0;
while(i<= nbofmission){
    score = score + 100;
    i++;
}
console.log("your score " + score)