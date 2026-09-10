// //  Challenge 10 : Tri à Bulles (Bubble Sort)
// Consigne : Écrivez une fonction trierTableau(tab) qui trie un tableau de nombres par ordre croissant en utilisant l'algorithme du tri à bulles.
// Exemple : trierTableau([5, 3, 8, 1, 2]) ➔ [1, 2, 3, 5, 8].

let Array = [5, 3, 8, 1, 2];

function trierTableau(Array) {
    for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array.length; j++)
            if (Array[j] < Array[j + 1]) {
                let temp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = temp;
            };
    };
    return Array;
};
output = trierTableau(Array)
console.log(output)