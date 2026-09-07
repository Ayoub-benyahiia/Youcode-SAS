// Partie 3 — Boucle for
// Challenge 11 : Factorielle
// Challenge 11 : Factorielle

// // Challenge 11 : Factorielle
// // Écrivez un programme qui calcule la factorielle d'un nombre.

// Formule :

// N! = N × (N-1) × (N-2) × ... × 1
// Exemple :

// N = 5

// 5! = 120
// Car :

// 5 × 4 × 3 × 2 × 1 = 120
// Contrainte :

// Ne pas utiliser de fonction prédéfinie.
// N! = N × (N - 1) × (N - 2) × ... × 1

const prompt = require('prompt-sync')()
let N = +prompt("entre your nombre : ")
let i = 1;
let result =1;
result = result * i;
for (let i = 1;i <= N;i++) {
    result = result * i
    console.log(result)
}