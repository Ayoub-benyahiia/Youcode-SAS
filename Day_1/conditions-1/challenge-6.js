//Partie 2 — switch / case
//Challenge 6 : Menu d'une application
const readline = require("readline");
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("please choisir une option ", (choix)=>{
    let choixnumber =Number(choix)
switch(choixnumber){
case 1:
    console.log("Afficher le profil");
    break;
case 2:
    console.log("Afficher les paramètres");
    break;
case 3:
    console.log("Afficher les notifications");
    break;
case 4:
    console.log("Se déconnecter");
    break;
default:
    console.log("Choix invalide.");
    break;
}
});