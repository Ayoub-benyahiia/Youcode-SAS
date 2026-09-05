// challenge in bloucles
let prompt = require(prompt - sync)();
let nombre = +prompt("entrer your number");
let count = 0;
while (nombre <= 0) {
    if (nombre % 2 != 0) {
        count++;
    }
    else {
        nombre++;
    }
    console.log(count);
};