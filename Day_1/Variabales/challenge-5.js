// challenge 5: 
const readline = require('readline');
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('input la durée du film en minutes' ,(film) => {
const yourfilm =Number(film);
if (yourfilm <60){
    console.log("Court métrage");
}
else if (yourfilm >= 60 && yourfilm <= 120){
    console.log("Film standard")
}
else{
    console.log("Film long")
}
rl.close()
})