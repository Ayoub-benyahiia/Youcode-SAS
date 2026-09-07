// Partie 2 — Tableaux d'Objets
// Challenge 06 — Liste des étudiants
let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];
//Afficher tous les étudiants.
for (i in students) {
    console.log(students[i].firstName, students[i].age + " ans " + students[i].city)
}

//Afficher uniquement leurs prénoms.
for (i in students) {
    console.log(students[i].firstName)
};
// Afficher leur âge.
for (i in students) {
    console.log(students[i].age)
};

// Afficher une phrase pour chaque étudiant
for (i in students) {
    console.log(students[i].age)
};

// Afficher une phrase pour chaque étudiant.
for (i in students) {
    console.log(students[i].firstName, students[i].age + " ans " + " est habite a " + students[i].city)
}