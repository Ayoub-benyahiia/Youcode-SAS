// 1. [Moyen] Gestion des inscriptions à un examen
// Une école reçoit une liste de candidats avec leur note d'admission. Écris un programme qui :

// Stocke les candidats dans un tableau d'objets { nom, note }.
// Utilise une boucle for pour parcourir la liste et une condition if/else pour classer chaque candidat en "Admis" (note ≥ 10) ou "Recalé".
// Trie ensuite la liste des admis par note décroissante avec un tri à bulles.
// Écris une fonction afficherResultats(liste) qui affiche le classement final.

const prompt = require('prompt-sync')();

function getUserInput(question) {
    let input = prompt(question)
    return input
};

const Array = [];
let countID = 1;

function generatelist(condidaturename, note) {
    let info = {
        id: countID,
        studentname: condidaturename,
        studentnote: note,
        // montion: 
    }
    Array.push(info)
    countID++
    return Array
};

function classstudent(Array) {
    for (let elem in Array) {
        if (Array[elem].studentnote >= 10) {
            console.log("admis")
        }
        else {
            console.log("Recalé")
        };
    };
};

function studentbynote(Array) {
    for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array.length - 1; j++) {
            if (Array[j].studentnote < Array[j + 1].studentnote) {
                let temp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = temp
            };
        };
    };
    return (Array)
};

let choix;
do {
    console.log("============================")
    console.log(" 1: enter condidature name :" + "enter note of student ")
    console.log(" 2 :classer chaque candidat")
    console.log(" 3 : afficher le classement final ")
    console.log(" 0 :Quiter ")

    choix = +getUserInput(" choose your choix")
    switch (choix) {
        case 1:
            let candidaturname = getUserInput("enter name of condidature ")
            let note = +getUserInput(" enter note of your condidature ")
            let list = generatelist(candidaturname, note)
            console.log(list)
            break;
        case 2:
            classstudent(Array)
            break;
        case 3:
            let notesort = studentbynote(Array)
            console.log(notesort)
            break;
    };
} while (choix != 0)


