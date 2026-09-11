// exercice by oussama

const text = "youcode is a coding school"

function findcaractere(text, caractere) {
    let countcaractere = 0;
    for (i in text) {
        if (text[i] === caractere) {
            countcaractere++
        }
    };
    return countcaractere
};

let find = findcaractere(text , "o")
console.log(find)