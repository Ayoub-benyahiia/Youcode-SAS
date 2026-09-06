// Challenge 6 : Inversion Manuelle (Simulation de reverse)



const array1 = [10, 20, 30, 40, "rachid", "mohammed"]
function reversTable(array) {
  let j = array.length - 1;
  for (i = 0; i < j; i++) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    j--;
  }
  return array
}
let  revers =reversTable(array1);
console.log(revers);