// Challenge 3 : Recherche du Maximum
array = [2, 3, 4, 5, 6, 7, 8, 9, 10]
//let Maximum = array[0]
// let numberofelements = array[i]
function trouverMax(tab) {
    let Maximum = tab[0]
    for (i = 0; i in array; i++) {
        if (array[i] > Maximum)
            Maximum = array[i];
    }
    return Maximum
}
output = trouverMax(array);
console.log(output)
