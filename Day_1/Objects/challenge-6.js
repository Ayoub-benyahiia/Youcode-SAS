// Challenge 08 — Recherche d'un étudiant

const prompt = require('prompt-sync')();
let input = prompt("entre your id ")

let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];
for (i in students)
if (students[i].id == input) {
  console.log(" Étudiant trouvé !");
  break;
}
else {
  console.log("Aucun étudiant trouvé avec cet ID.");
  break;
}

