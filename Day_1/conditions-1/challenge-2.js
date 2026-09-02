//Challenge 2 : Positif, négatif ou zéro
const readline = require("readline");
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter le nombre", (raqem) => {
    const arqam = Number(raqem)
if(arqam > 0){
    console.log("Le nombre est positif")
}
else if (arqam < 0) {
    console.log("Négatif")
}
else {
    console.log("Le nombre est égal à zéro.")
}
rl.close()
});