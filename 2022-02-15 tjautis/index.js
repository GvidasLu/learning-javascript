let siunta = 'S';

console.log('Siunciam ', siunta);

if(siunta == 'S') {
    console.log('Telpa S');
}
if(siunta == 'S' || siunta == 'M') {
    console.log('Telpa M');
}
if(siunta == 'S' || siunta == 'M' || siunta == 'L') {
    console.log('Telpa L');
}
if(siunta == 'S' || siunta == 'M' || siunta == 'L' || siunta == 'XL') {
    console.log('Telpa XL');
}
// /////////////////////////////////////////
switch(siunta) {
    case 'S': console.log('Telpa S');
    case 'M': console.log('Telpa M');
    case 'L': console.log('Telpa L');
    default: 
             console.log('Telpa XL');
}
// /////////////////////////////////////////////

let light = 'green';

console.log('light', light);

if(light == 'green') {
    console.log('Go');
} else if (light == 'Yellow') {
    console.log('Ready');
} else {
    console.log('Wait');
}
// ///////////////////////////////////

switch (light) {
    case 'green': console.log('Go'); 
            break;
    case 'yellow': console.log('Ready'); 
            break;
    default: console.log('Wait');
}


// 1. Ridenam kauliuką (rand 1-6). 
// Jeigu išsiridena 1 arba 5 perku ledų, jeigu 2 arba 4 perku čipsų, jeigu 3 arba 6 perku pieno. 
// Ką perkat DONE!

function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let kauliukas = randomSkaicius(1,6);

console.log('kauliukas', kauliukas);

switch (kauliukas) {
    case 1: 
    case 5: 
        console.log('Perku ledu');
        break;
    case 2: 
    case 4: 
        console.log('Perku cipsu');
        break;
    default: 
        console.log('Perku pieno');
}

// //////////////////////////////////

// 2. do while ciklas. Metom kauliuką tol kol iškrenta 5. 
// Suskaičiuojam kiek kartų mėtėm DONE!


// let run;
// let count = 0;
// let saugiklis = 0;
// do {
//     if (saugiklis++ > 100) break;
//     count++;
//     run = randomSkaicius(1, 6);
//     console.log(run);

// }while(run != 5);
// console.log('prasisuko: ', count);

// == --> !=         | Visos ligybes pavirsta i neligybes
// != --> ==         | Visos neligybes pavirsta i ligybes
// > --> <=          | Daugiau pavirsta i maziau arba lygu
// <= --> >          | Maziau arba lygu pavirsta i daugiau
// < --> >=          | Maziau pavirsta i daugiau arba lygu
// >= --> <          | Daugiau arba lygu pavirsta i maziau
// || --> &&         | Arba pavirsta i enda(ir)
// && --> ||         | Endas(ir) pavirsta i arba

// 3. do while ciklas. Metom kauliuką tol kol iškrenta 5 arba 1. 
// Suskaičiuojam kiek kartų mėtėm DONE!

// let run2;
// let count2 = 0;
// do {
//     count2++;
//     run2 = randomSkaicius(1, 6);
//     console.log(run2);

// }while(run2 != 5 && run2 != 1);
// console.log('prasisuko: ', count2);

// 4. do while ciklas. Metom kauliuką. 
// Sustojam kai išmestų kauliukų suma tampa didesnė nei 33. 
// Suskaičiuojam kiek kartų mėtėm DONE!

let runSuma = 0;
let count4 = 0;

// do {
//     let run = randomSkaicius(1, 6);
//     console.log(run);
//     count4++;
//     runSuma = runSuma + run;
// }while(runSuma <= 33);

// \/ tik su while sita uzduoti galima padaryti, bei pasitikrinti be - do.
while (runSuma <= 33) {
    let run = randomSkaicius(1, 6);
    console.log(run);
    count4++;
    runSuma = runSuma + run;
}

console.log('prasisuko ', count4, 'suma: ', runSuma);

// 5. Yra 1000 litrų vandens. 
// Karvių banda per parą išgeria atsitiktinį kiekį nuo 70 iki 200 litrų. 
// Paskaičiuoti per kiek dienų karvės išgeria vandenį. DONE!

let h2o = 1000;
let days = 0;

while (h2o > 0) {
    days++;
    h2o = h2o - randomSkaicius(70, 200);
}

console.log('Karves numire is troskulio ' + days + ' diena');