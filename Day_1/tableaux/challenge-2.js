//Challenge 2 : Calculateur de Somme

let array = [10, 20, 30]

function calculerSomme(tab) {
    let i = 0;
    let somme = 0;
    while (array[i]) {
        somme += array[i]
        i++;
    }
    return somme
}
output = calculerSomme(array)
console.log(output)