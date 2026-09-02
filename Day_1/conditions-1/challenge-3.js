// Challenge 3 : Vérification d'une note
const readline = require("readline");
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter your note", (note)=>{
    const lanote =Number(note)
    if (lanote <0 |lanote|20  ){
        console.log("note invalide")
    }
    else if  (lanote >=10){
        console.log("admis")
    }
    else{
        console.log("Non admis")
    }
    rl.close()
});