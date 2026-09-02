//Challenge 5 : Calcul de la mention
const readline = require("readline");
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter your note", (note) => {
    if (note < 0 || note > 20) {
        console.log("note invalide")
    }
    else if (note < 10) {
        console.log("mention :Échec")

    }
    else if (note >= 10 && note <= 11.99) {
        console.log("mention : pasable")
    }
    else if (note >= 12 && note <= 13.99) {
        console.log("mention : Assez bien")
    }
    else if (note >= 14 && note <= 15.99) {
        console.log("mention : Bien")
    }
    else if (note >= 16 && note <= 17.99) {
        console.log("mention : Très bien")
    }
    else if (note >= 18 && note <= 20) {
        console.log("mention : Excellent")
    }
    rl.close()
});