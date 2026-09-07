// Challenge 05 — Gestion d'un compte bancaire
const prompt = require('prompt-sync')()
let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};

console.log("Le salaire de base est : " + employee.salary)
console.log("Le bonus est : " + employee.bonus)
employee.pénalité = prompt("entre your penality")

let salairefinal = employee.salary + employee.bonus - employee.pénalité

console.log("leur salire fina is : " + salairefinal)
