/* SNACK 1 */
const bikes = [
    { nome: 'Focus', peso: 7.60},
    { nome: 'Yeti', peso: 5.50},
    { nome: 'Look', peso: 7.88},
];

// DEFINISCO LA BICI PIU' LEGGERA PRIMA DI EFFETTUARE IL CICLO CON IL CONFRONTO 
let lightBike = bikes[0];

// CICLARE L'ARRAY DELLE BICI PER TROVARE QUELLA CON PESO MINORE 
for (let i = 0; i < bikes.length; i++) {
// CONFRONTO IL PESO DI lightBike CON QUELLO DELL'ELEMENTO CHE STO ATTUALMENTE ITERANDO
    if (lightBike.peso > bikes[i].peso) {
        lightBike = bikes[i];
    }
}

console.log(lightBike);

/* SNACK 2 */

const squadre = [
    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    }
]

// DEFINIZIONE DELLA FUNZIONE CHE GENERA NUMERI RANDOM
function generateRandomNumbers(min, max){
    return Math.floor(Math.random()* max - min +1) + min;
}

// CICLO L'ARRAY PER ASSEGNARE AI PUNTI DELLE SQUADRE ED AI FALLI SUBITI UN VALORE RANDOMICO GENERATO CON LA FUNZIONE
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = generateRandomNumbers(20, 120);
    squadre[i].falliSubiti = generateRandomNumbers(10, 30);
}

console.log(squadre);

// CREO UN NUOVO ARRAY VUOTO 
const nuovaSquadra = [];
for (let i=0; i < squadre.length; i++){
// MI CREO UN NUOVO OGGETTO
    let nuovoOggetto = {
        nome: squadre[i].nome,
        falliSubiti:squadre[i].falliSubiti

    }
// VADO A PUSHARE L'OGGETTO NEL NUOVO ARRAY
nuovaSquadra.push(nuovoOggetto);
    

}
console.log(nuovaSquadra);





