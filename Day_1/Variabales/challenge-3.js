// Conversion de stockage
const readline = require('readline');
// creation d'une interface
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});
rl.question('Input your storage:' , (GB) =>{
    const newGB = Number(GB);
    const MB = newGB * 1024;
    console.log(`Stockage : ${newGB} GB`);
    console.log(`Résultat : ${MB} MB`);
    rl.close();
});