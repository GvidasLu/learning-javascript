// Uzduotis 1

function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let masyvas = [];

        for(let i = 0; i < 30; i++) {
            masyvas.push(randomSkaicius(5, 25));
        }

        console.log(masyvas);



// Uzduotis 2

//----------------- d) sukurkite nauja masyva, kurio reiksmes yra 1 uzdavinio masyvo reiksmes minus tos reiksmes indeksas;

let masyvnas = [];
for(let i = 0; i > 30; i++) {
    masyvnas[i] = masyvas[i] - i; 
}

console.log(masyvnas);

// e) Papildykite masyva papildomais 10 elementu su reiksmemis nuo 5 iki 25, kad bendras masyvas padidetu iki indekso 39;

for(let i =0; i < 10; ii++) {
    masyvas.push(randomSkaicius(5,25));
}

console.log(masyvas);

// f) is masyvo elementu sukurkite du naujus masyvus. Vienas turi buti sudarytas is neporiniu indeksu reiksmiu, o kitas is poriniu.

let lyginis = [];
let nelyginis = [];
for(let i = 0; i < 40; i = i + 2){
    lyginis.push(masyvas[i]);
    nelyginis.push(masyvas[i + 1]);
}
console.log(lyginis);
console.log(nelyginis);

// g) pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni uz 15

for(let i = 0; i < 40; i = i + 2) {
    if(masyvas[i] > 15) {
        masyvas[i] = 0;
    }
}
console.log(masyvas);

// 10 uzduotis

if(menuo == 1 || menuo == 5 || menuo == 3 || menuo == 7 || menuo == 8 || menuo == 10 || menuo == 12) {
    console.log(`menuo ${menuo}, dienu skaiciu 31`)
}else if (menuo == 2) {
    console.log(`menuo ${menuo}, dienu skaicius 28`)
}else {
    console.log(`menuo ${menuo}, dienu skaicius `)
}


// 11 uzduotis

let iseinaV = 8;
let iseinaM = 25;
let trunka = 35;
let prasidedaV = 9;
let prasidedaM = 5;

if(iseinaV * 60 + iseinaM + trunka <= prasidedaV * 60 + prasidedaM) {
    console.log('petriukas spejo');
}else {
    console.log('petriukas pavelavo');
}