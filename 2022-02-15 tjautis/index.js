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


// Ridenam kauliuką (rand 1-6). 
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