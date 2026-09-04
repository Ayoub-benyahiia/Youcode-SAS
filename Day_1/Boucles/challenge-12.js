// challenge in bloucles
let prompt = require("prompt-sync")();
let n = +prompt("entrer your number: ");
let i = 1;
while (i <= n) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
    i++;
}