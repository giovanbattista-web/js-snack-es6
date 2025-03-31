/* SNACK 1 */
const biciclette = [
    {
        nome: 'Focus',
        peso: 8.10
    },
    {
        nome: 'Yeti',
        peso: 13.88
    },
    {
        nome: 'Look',
        peso: 7.88
    },
]

let pesoMinore = biciclette[0].peso;
let minore;

for (let i = 0; i < biciclette.length; i++) {
    if (pesoMinore > biciclette[i].peso) {
        minore = biciclette[i];
        pesoMinore = biciclette[i].peso;
    }
}

console.log(minore);

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

let puntiFatti;
let falliSubiti;

let getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

    for (let i=0; i < squadre.length; i++){
        squadre.puntiFatti = getRandomNumber(20, 120);
        squadre.falliSubiti = getRandomNumber(10, 30);
    }

console.log(squadre);
    

