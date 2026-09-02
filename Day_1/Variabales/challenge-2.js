// Challenge 2 : Conversion de monnaie

const readline = require('readline');
// creations of interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('input your montant? ', (Montant) => {
    const montantMAD = Number(Montant);
    const montantEUR = montantMAD / 11;
    console.log(montantEUR + " EUR ");
    rl.close();

});