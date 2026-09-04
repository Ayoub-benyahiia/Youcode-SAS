// challenge in bloucles
const prompt = require('prompt-sync')();
let nombre = +prompt("entrer your number");
let count = 0;
while (nombre >= 0) {
    if (nombre % 2 != 0) {
        console.log("num: ",nombre);
        count++;
    }

    nombre--;
};
console.log("total: ",count);