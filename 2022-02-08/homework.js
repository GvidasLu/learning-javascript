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


// 11 uzduotis Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro
// kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie
// tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite:
// jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8,
// m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.

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

// 9. Žinomi trijų klasės draugų kontrolinio darbo pažymiai. Sudarykite programą, kuri
// nustatytų, kuris mokinys gavo geriausią pažymį, kai žinome jų pažymius p1, p2, p3
// Pasitikrinkite: Jei p1=5, p2=8, p3=9 ekrane turi būti: Trečias gavo geriausią pažymį.

let p1 = 10;
let p2 = 8;
let p3 = 9;

if(p1 > p2 && p1 > p3) {
    console.log('Pirmas mokinys gavo geriausiai');
}else if(p2 > p3 && p2 > p1){
    console.log('Antras mokinys gavo daugiausiai');
}else {
    console.log('Trecias mokinys gavo geriausia pazymi');
}

// 10. Parašykite programą, kuri įvedus mėnesio numerį n atspausdintų to mėnesio dienų kiekį
// d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)

let n = 5;

if(n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
    console.log('Menesio dienu turi 31 diena');
}else if(n == 2) {
    console.log('Menesio dienu turi 28 diena');
}else {
    console.log('Menuo turi 30 dienu');
}

