// challenge-1 in les objects
//Créez un objet student avec les propriétés:

//firstName
//lastName
//age
//city
//school



let person = {
    firstName: "ayoub",
    lastName: "benyahia",
    age: "22",
    city: "agadir",
    school: "youcode"
};
//let i 
for (let i in person) {
console.log(i,":",person[i]);

};
console.log("Im "+ person.firstName + " " +person.lastName +" "+ person.age + " livng in " + person.city)