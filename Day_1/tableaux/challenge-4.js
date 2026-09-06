// Challenge 4 : Ajout à la Fin (Simulation de push)

const prompt = require('prompt-sync')();
// let elements = +prompt("entre your element")

array = [0,1,2,3,4,5,6,7,8,9,10]

function ajouterALaFin(tab, element){
    let elements = +prompt("entre your element")
    array[array.length]=elements
    return array
}
//ajouterALaFin(array);
console.log(ajouterALaFin(array))