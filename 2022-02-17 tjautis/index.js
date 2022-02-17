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