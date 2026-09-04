const prompt = require('prompt-sync')();
let N = +prompt("entre le nombre");
let i=0;
let count =0;
let inpair =0;
while(i<N){
    if(i % 2 == 0 &&){
         count++;
         console.log(i)
    }
    else{
        inpair++;
        console.log(i)
    }
    i++;
}
console.log("count of this numbers is : ",count,"count of numbers inpair ",inpair)