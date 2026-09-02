// Challenges JavaScript — Les Conditions
// Partie 1 — if / else
const readline = require("readline");
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("quel est votre age", (age) => {
    const vage = Number(age)
    if (vage >= 18) {
        console.log("Accès autorisé")
    }
    else {
        console.log("Accès refusé")
    }
    rl.close()
});