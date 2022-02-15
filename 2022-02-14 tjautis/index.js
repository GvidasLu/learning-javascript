//1. Reikia su ciklo pagalba atspausdinti skaičius nuo 10 iki 1 t.y. 10 9 .... 2 1 DONE!

let i = 10;

for(let i = 10; i >= 0; i--) {
    console.log(i + ' DONE');
}

// 2. const animal = 'Begemotas'; Žodį animal atspausdinti stulpeliu DONE!

const animal = 'Begemotas';

console.log(animal[0]);
console.log(animal[6]);

for(let i = 0; i < animal.length; i++) {
    console.log(animal[i], i);
}

// 3. Padaryti vieną stringą, labai ilgą, kuriame 100 kartų kartotųsi žodis Begemotas DONE!




// 4. 10 kartų meskite kauliuką (rand 1 - 6). Suskaičiuokite visų metimų sumą DONE!
function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let suma = 0;

for(let i = 0; i < 10; i++) {
    let run = randomSkaicius(1, 6);
    console.log(run);

    suma = suma + run;
}

console.log('Suma:', suma);

// 5. 10 kartų mesti kauliuką, skaičiuoti sumą, bet jeigu suma viršina 35 - ciklą reikia nutraukti pirma laiko. 
// Gale atspausdinti sumą ir prasisukusių ciklų skaičių DONE!

let suma2 = 0;

for(let i = 0; i < 10; i++) {
    let run = randomSkaicius(1, 6);
    console.log(run);

    suma2 = suma2 + run;
    if(suma2 > 35) {
        break;
    }
}

console.log('Suma:', suma2);

// 6. 10 kartų mesti kauliuką ir suskaičiuoti kiek kartų iškrito skaičius didesnis nei 4 DONE!

 let kauliukai = 0;

 for (let i = 0; i < 10; i++) {
     let krenta_Kauliukai = randomSkaicius(1, 10);
     console.log(krenta_Kauliukai);
     if (krenta_Kauliukai > 4) {
         krenta4++;
     }
 }

 console.log('Kartai: ', krenta4);

//  7. 10 kartų mesti kauliuką ir suskaičiuoti kiek kartų iškrito 3 ir kiek kartų iškrito 5 DONE!

let kauliukai = 0;

for (let i = 0; i < 10; i++) {
    let krenta_Kauliukai = randomSkaicius(1, 10);
    console.log(krenta_Kauliukai);
    if (krenta_Kauliukai == 3) {
        krenta3++;
    }
    if(krenta_Kauliukai == 5) {
        krenta5++;    }
}

console.log('Kartai: ', krenta3, krenta5);