// Groupe 1 — Tableaux d'entiers

const prompt = require('prompt-sync')()
let N = +prompt("'entre your nombre : ")
let nombres = [4, 8, 15, 16, 23, 42];
//console.log(nombres.length)
function recherchenumber(tab){
    //let nombres = [4, 8, 15, 16, 23, 42];
    for(let i=0;i<= nombres.length;i++){
        if(nombres[i]== N){
            return true
        }
        else{
            return false
        }
    };

};
output = recherchenumber(nombres);
console.log(output)