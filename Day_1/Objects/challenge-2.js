// Challenge 02 — Modifier un profil
//**Niveau : 1 **
const prompt= require('prompt-sync')();
let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
};

user.age = prompt("entre you age ");
user.city = prompt("entre your new citty");
user.status = prompt("entre your new status");
user.email = prompt("entre your email")
for (i in user){
console.log(i,":"+ user[i])
};

