// 2. [Facile-Moyen] Tri à bulles croissant
let notes = [12, 5, 19, 3, 27, 8, 14];

let i = 0;
let x = 1
let j = notes[i] + x
let temp = 0;
for (i in notes) {
    if (notes[i] < notes[i] + 1)
        temp = i
        i = j
        j = temp
    i++;
}
console.log(notes)