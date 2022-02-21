// 1. Reikia padaryt masyvą iš 10 elementų, kurio elementai yra rand skaičiai nuo 0 iki 7 DONE!

let namas = ['Antanas', 'Laima', 'Bebras'];

console.table(namas);

console.log(namas[0]);
console.log(namas[1]);
console.log(namas[2]);

namas.push('Zuikis'); // <--- papildomas aukstas zuikiui apgyvendinti

console.table(namas);

for(let i = 0; i < 10; i++) {
    namas.push('Zuikis-' +i); // <--- daugiau aukstu statosi su ciklu
}
////////////////////////////////////////
let masyvas = [];

for(let i = 0; i < 10; i++) {
    masyvas.push(randomSkaicius(0, 7));
}

console.table(masyvas);

// 2. Atspausdinti masyvo reikšmes stulpeliu, bet tik tas kurios didesnės už 3 DONE!

let masyvas1 = [];

for (let i = 0; i < masyvas1.length; i++) {
    
    if(masyvas1[i] > 3){
        console.log(masyvas1[i]);
    }
}

// 3. Paskaičiuoti masyvo elementų sumą DONE!

let suma = 0;

for (let i = 0; i < masyvas1.length; i++) {
    suma = suma + masyvas1[i];
}
console.log(suma);

// 4. Reikia surasti mažiausią elementą masyve DONE!

let minimumValue = masyvas1[0];

for (let i = 0; i < masyvas1.length; i++) {
    
    if (masyvas1[i] < minimumValue) {
        minimumValue = masyvas1[i];
    }
}

console.log(minimumValue);

// 5. Paskaičiuoti kiek porinių/lyginių reikšmių yra masyve DONE!

let count = 0;

for (let i = 0; i < masyvas1.length; i++) {
    
    if (masyvas1[i] % 2 == 0) {
        count++;
    }
}

console.log(count);

// ////////////////////////// \/ dvigubas masyvas(array)

let pirmasAukstas = ['Nauseda', 'Antanas', 'Petras'];
let antrasAukstas = ['Linas', 'Birute', 'Bebras'];
let treciasAukstas = ['Tomas', 'Sima', 'Saulius'];

let didelisNamas = [];

didelisNamas.push(pirmasAukstas);
didelisNamas.push(antrasAukstas);
didelisNamas.push(treciasAukstas);

console.table(didelisNamas);

console.log(didelisNamas[2][1]);

// 6. atspausdinti bigHouse gyventojų sąrašą DONE!

for (let i = 0; i < didelisNamas.length; i++) {
    // console.log(didelisNamas[i]); //butu masyvas
    // const store = didelisNamas[i];
    // const flats = store.length;
    for(let k = 0; k < didelisNamas[i].length; k++) {
        console.log(didelisNamas[i][k]);
    }
}

// 7. Kur gyvena tomas? DONE!

for (let i = 0; i < didelisNamas.length; i++) {
    for (let k = 0; k < didelisNamas[i].length; k++){
        if (didelisNamas[i][k] == 'Tomas') {
            console.log('Tomas gyvena: ', i, k);
        }
    }
}

/////////////////////////////

// 1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, 
// o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let pinigine = [];

for (let i = 0; i < randomSkaicius(10, 30); i++) {
    pinigine.push(randomSkaicius(0,10));
}

console.log(pinigine + 'piniginei pinigai');

// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

let pinigu_suma = 0;

for(let i = 0; i < pinigine.length; i++) {
    pinigu_suma = pinigu_suma + pinigine[i];
}

console.log('pinigu suma: ' + pinigu_suma);

// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

let skaiciuokle = 0;

for(let i = 0; i < pinigine.length; i++) {
    if(pinigine[i] <= 2){
        skaiciuokle = skaiciuokle + pinigine[i];
    }
}
console.log(' popieriniu pinigu suma ', skaiciuokle );

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

let skaiciuokle = 0;

for (let i = 0; i < pinigine.length; i++) {
    if(pinigine[i] <= 2) {
        skaiciuokle + pinigine[i] == 0;
    }
}

console.log('isleistu metaliniu pinigu suma: ', skaiciuokle);

// 1. Parašyti skriptą, kuris naudojant for ciklą atspausdintų 11 skaitmenų nuo 100 iki 200 kas 10 (t.y. 100, 110, 120… 180, 190, 200);

for(let i = 100; i <= 200; i += 10) {
    console.log(i);
}

// 2. Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15. Sugeneruotus skaičius cikle spausdinti. 
// Ciklui pasibaigus išspausdinti cikle sugeneruotų dviženklių skaičių kiekį;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let skaiciavimas = 0;
let skaicius;

for(let i = 0; i < 10; i++) {
    skaicius = rand(5, 15);
    console.log(skaicius);
    if(skaicius > 9) {
        skaicius++;
    }
}
console.log('cikle sugeneruoti skaiciai: ', skaicius);

// 3. Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15. 
// Sugeneruotus skaičius cikle spausdinti. 
// Ciklui pasibaigus išspausdinti cikle sugeneruotų skaičių vidurkį 

let suma = 0;
let vidurkis = 0;

for(let i = 0; i < 10; i++) {
    skaicius = rand(5, 15);
    console.log(skaicius);
    suma += skaicius;
}

vidurkis = suma / 10;
console.log('vidurkis: ', vidurkis);

// 4. Cikle do while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 50. 
// Ciklą užbaigti, kai bus sugeneruotas skaičius 13 arba 33 arba 43. 
// Ciklui pasibaigus išspausdinti iteracijų (kiek kartų ciklas prasisuko) kiekį

let skaiciavimas = 0;

do {
    skaicius = rand(10, 50);
    skaiciavimas++;
}while(skaiciavimas != 13 && skaiciavimas != 33 && skaiciavimas != 43);

console.log('Ciklas prasisuko ', skaiciavimas, 'kartu' );

// 5. Cikle while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 20. 
// Ciklą užbaigti, kai bus tris kartus (trečią, ne pirmą kartą) sugeneruotas skaičius 17.
//  Ciklui pasibaigus išspausdinti iteracijų (kiek kartų ciklas prasisuko) kiekį.

skaiciavimas = 0;
let skaiciavimo_pabaiga = 0;

while(skaiciavimo_pabaiga != 3) {
    skaiciavimas = rand(10, 20);
    skaiciavimas++;
    if(skaiciavimas == 17) {
        skaiciavimo_pabaiga++;
    }
}

console.log('Ciklas prasisuko ', skaiciavimas, 'kartu', skaiciavimo_pabaiga );

