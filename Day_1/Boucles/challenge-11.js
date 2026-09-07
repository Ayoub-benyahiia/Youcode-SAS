// Partie 3 — Boucle for 
//Challenge 12 : Compter les diviseurs

// Nombre : 12

Diviseurs:
1
2
3
4
6
12

// Nombre de diviseurs : 6

const prompt = require('prompt-sync')()
let N = +prompt("entre your nombre : ")

let count = 0;
for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
        count++;
        console.log("Diviseurs :" + i)
    }
}
console.log("Nombre de diviseurs " +count)