// Challenge 6 : Inversion Manuelle (Simulation de reverse)

const tableau1 =[10,20,30,40,"rachid","mohammed"]
let tableau2 = tableau1[tableau1.length -1]

function inverserTableau(tab){
    for(let i=0; i <=tab; i++)
        console.log(tab[i])
        return tab
}

inverserTableau(tableau1);
console.log(inverserTableau(tableau1));
console.log(tableau2);

function glebch9leb(tab){
    let i= -1
    for(i in tab)
        i++;
}
glebch9leb(tableau1)



function reverse(tab) {
var output = '';
for (var i = tab.length - 1; i >= 0; i--)
  output += tab[i];
return output;
}
onsole.log(reverseString("youcode"));