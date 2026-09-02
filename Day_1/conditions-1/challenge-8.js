// Challenge 8 : Calculatrice simple
const readline = require("readline");
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("entrer Premier nombre", (premiernombre) => {
    let nombre1 = Number(premiernombre);
    rl.question("entrer operator", (operator) => {

        rl.question("entrer Deuxième nombre", (Deuxièmenombre) => {
            let Deuximenb = Number(Deuxièmenombre)
            if (operator == "/" && Deuximenb == 0) {
                console.log("dont calcule")
            }
            switch (operator) {
                case "*":
                    console.log(nombre1 * Deuximenb)
                    break;
                case "+":
                    console.log(nombre1 + Deuximenb)
                    break;
                case "-":
                    console.log(nombre1 - Deuximenb)
                    break;
                case "/":
                    console.log(nombre1 / Deuximenb)
                    break;
                default:
                    console.log("Choix invalide.")
                    break;
            }
            rl.close();
        });
    });
});
