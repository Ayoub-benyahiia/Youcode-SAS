// Challenge 5 : Recherche d'Élément (Simulation de includes)
let array = [10, 20, 30, 40]
element = 10;
function contientElement(tab, valeur) {
    //array[10,20,30,40]
    for (i = 0; i in array; i++) {
        if (array[i] == element) {
            return true
        }
        else {
            return false
        }
    }
};
console.log(x = contientElement(array, element))