// Challenge 4 : Calcul de consommation d'une voiture
const readline = require('readline');
// creation d'une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('input your Distance en kilomètres', (distance) => {
    const dis = Number(distance)
    console.log(dis);
    rl.question('input your Carburant en litres ', (carburant) => {
        const carbu = Number(carburant)
        console.log(carbu);
        const Consommation = (carbu / dis) * 100

        console.log(`la consommation moyenne en litres / 100 km est : ${Consommation.toFixed(2)}`);
        rl.close()
    });
});
 