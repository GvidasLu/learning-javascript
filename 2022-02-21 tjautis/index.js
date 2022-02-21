// 1. Parašyti funkciją hello kurią paleidus ji konsolėje atspausdintų 'Hello Africa'. DONE!

function myFunction() {
    console.log('Hello Africa');
}

myFunction();

//////////////////////////////////////

console.log('START');

// funkcijos deklaravimas
function hello() {
    console.log('Hello africa');
}

console.log('BLA bla bla');


// funkcijos iskvietimas 
hello();
console.log('Again');
hello();
console.log('Again');
hello();

console.log('FINISH');

// 2. Parašyti funkciją helloWhat, kuri turi vieną parametrą ir kurią paleidus ji konsolėje atspausdintų 'Hello' + argumentas paduotas į parametrą. DONE!

// parametras yra kintamasis
// funkcijos deklaravimas
function helloWhat(what) { // what = america; what yra priskiriama zodis america.
    console.log('hello, ' + what);
}

let america = 'America';
// parametras reiksme igauna tik iskvietimo metu
// reiksme priskiriama ir ta reiksme vadinama argumentu
helloWhat('America'); // argumentas - turi reiksme
helloWhat(america);
helloWhat('Arctic');

// funkcijos deklaravimas \/
function oneTwo(one, two) {
    console.log('Pirmas: ', one, 'Antras:', two);
}

// funkcijos iskvietimas \/
oneTwo('kitCat', 'Dog');
oneTwo('Bebras', 'Barsukas');

// 3. Parašyti funkciją su dviem parametrais kuri spausdintų jų sumą DONE!

function suma(vienas, du) {
    let suma = vienas + du;
    console.log(suma);
}

// deklaruoti sita funkcija
const suma = function(vienas, du) { // geriau naudoti funkcija priskyrus kintamui
    let suma = vienas * du;
    console.log(suma);
}

console.log(suma);

suma(5, 8);

// 4. Padaryti masyvą iš dviejų elementų. 
// Pirmas masyvo elementas yra sumos funkcija, antras daugybos funkcija (iš ankstesnio užd) DONE!

const calc = [];

calc[0] = function(a, b) {
    let suma = a + b;
    console.log(suma);
}

calc[1] = function(a, b) {
    let suma = a * b;
    console.log(suma);
}

console.log(calc);

calc[0](7, 10);
calc[1](7, 10);

/////////////////////////////

const helloReturn = function() {
    console.log('before');

    return 'hello, africa'; // zodis return nutraukia funkcijos veikima

    console.log('after'); // niekad gyvenime kodas nebus paleistas
}

let africa = helloReturn();

console.log(africa);

// 9. testo uzduotis

const pirminisSkaicius = function (sk) {

    console.log(typeof sk % 5);

    if(typeof sk != 'number') {
        return 'blogai';
    }

    for ( let i = 2; i < sk; i++) {
        if (sk % i == 0) {
            return 'Ne pirminis, nes dalinasi is ' + i;
        }
    }
    return 'Taip, pirminis'
}

console.log(pirminisSkaicius(20));