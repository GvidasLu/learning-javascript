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

// 12. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti
// lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti
// negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti:
// Trikampį sudėlioti negalima.

let n = 0;

if(n % 3 == 0 && n != 0) {
    console.log('sudeti trikampi galima');
}else {
    console.log('sudeti trikampi negalima');
}

//  13. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri
// metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms
// skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių
// žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“.
// Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti
// spausdinama: Metai neolimpiniai

let metai = randomSkaicius(1896, 2012);

if(metai % 4 == 0) {
    let n = (metai - 1896) / 4 + 1;
    console.log('metai olimpiniai ir zaidyniu numeris yra:' + n);
}else {
    console.log('metai neolimpiniai');
}

// 14. 

let a = 1;
let b = 2;
let c = 1;

let x;
let x1;
let x2;
let d;

d = (b ** 2) - (4 * a * c);

if (d < 0) {
  console.log("sprendinių nėra");
} else if (d == 0) {
  x = -b / (2 * a);
  console.log("X = " + x);
} else {
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);
  console.log("X1 = " + x1);
  console.log("X2 = " + x2);
}


// // 15.Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų
// kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius
// ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2
// porcijas, liks centų 10

let centu = 80;
let kaina = 25;
let porcijos = Math.floor(centu / kaina);
let liekaCentu = centu % kaina;

console.log('Saulius nusipirks porciju: ' + porcijos + ' Sauliui lieka centu: ' + liekaCentu);

// 16. Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną telpa m dėžių
// prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, kiek kartų
// k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę.
// Pasitikrinkite: jei n = 100, m = 14, tai k = 8.

let nDeziu = 100;
let masinosDeziu = 14;
let kartuVaziuos = Math.ceil(nDeziu / masinosDeziu);

console.log('Pervezti mums kartu reiketu: ' + kartuVaziuos);


// 17. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu
// vienetu, o mažesnį padidintu vienetu.

let a = 5;
let b = 3;

if(a < b) {
    b--;
    a++;
} else if(a > b){
    b++;
    a--;
}else {
    console.log('Skaiciai lygus');
}

// Namu darbai \/

// 1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

let masyvas = [];
let dublis = [];

function generateRandomLetter() {
    const alphabet = 'ABDC';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

for(let i = 0; i < 200; i++) {
    masyvas[i] = generateRandomLetter();
}

console.log(masyvas);

masyvas.forEach((i) => {
    dublis[i] = (dublis[i] || 0) + 1;
});

console.log(dublis);

// 2. uzduotis Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.

masyvas.sort();

console.log(masyvas);

// 3. uzdavinys Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. 
// Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

let masyvas1 = [];
let masyvas2 = [];
let masyvas3 = [];
let masyvasJoin = [];
let unikalus = [];
let unikalusKomb = [];
let dublikatai = [];

for(let i = 0; i < 200; i++) {
    masyvas1[i] = generateRandomLetter();
    masyvas2[i] = generateRandomLetter();
    masyvas3[i] = generateRandomLetter();
    masyvasJoin[i] = masyvas1[i] + masyvas2[i] + masyvas3[i];
}

for(let i = 0; i < 200; i++){
    if(!unikalus.includes(masyvasJoin[i]) && !dublikatai.includes(masyvasJoin[i])) {
        unikalus.push(masyvasJoin[i]);
    }else if(unikalus.indexOf(masyvasJoin[i])) {
        let index = unikalus(masyvasJoin[i]);
        unikalus.splice(index, 1);
        dublikatai.push(masyvasJoin[i]);
    }
};

unikalus.sort();
masyvasJoin.sort();
console.log(masyvasJoin);
console.log(unikalus);

// 4. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
// Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

let skaicius1 = [];
let skaicius2 = [];

while(skaicius1.length < 100) {
    let skaicius = randomSkaicius(100, 999);
    if(skaicius1.includes(skaicius)) {
        skaicius1.push(skaicius);
    }
}

console.log(skaicius1.sort());
console.log(skaicius2.sort());

// 5. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, 
// kurios yra pirmame 4 uždavinio masyve, bet nėra antrame 4 uždavinio masyve.
let skaicius3 = [];

for(let i = 0; i < 100; i++) {
    if(!skaicius2.includes(skaicius1[i])) {
        skaicius3.push(skaicius1[i]);
    }
}

console.log(skaicius3.sort());

// 6. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.

let skaicius4 = [];

for(let i = 0; i < 100; i++) {
    if(skaicius2.includes(skaicius1[i])) {
        skaicius4.push(skaicius1[i]);
    }
}

console.log(skaicius4.sort());