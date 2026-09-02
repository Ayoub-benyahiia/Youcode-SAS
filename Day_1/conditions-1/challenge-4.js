//Challenge 4 : Livraison gratuite
const readline = require("readline");
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter le montant de la commande", (montant) => {
    let montantcommande = Number(montant);
    if (montantcommande >= 500) {
        console.log("livraison gratuit")
        console.log("le montant final à payer", (montantcommande))
    }
    else //(montantcommande < 500)
    {
        console.log("Livraison = 40")
        console.log("le montant final à payer", (montantcommande + 40))
    }
    rl.close()
});