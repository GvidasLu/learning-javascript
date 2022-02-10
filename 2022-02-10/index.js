// 1. naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

// for ciklas turi tris dalis
for(let i = 0; i < 5; i++) {
    console.log('labas');
}

// 2. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje
// eilutėje);

for(let i = 0; i < 5; i++) {
    console.log(i);
}

// 3. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius
// vienoje eilutėje);

for(let i = 0; i < 5 ; i++) {
    console.log(i * 10);
}

// 4. naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius
// vienoje eilutėje);

for(let i = 49; i < 54 ; i++) {
    console.log(i);
}

// 5. naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje
// eilutėje);

for(let i = 4; i >= 0; i--) {
    console.log(i);
}

// 6. naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10
// (vienas skaičius vienoje eilutėje);
function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let i = 0; i < 5; i++) { //for ciklas nurodyti tam tikra eiluciu skaiciu
    console.log(randomSkaicius(0, 10));
}

// 7. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius
// vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let i;

while(i != 5) { 
    i = randomSkaicius(0, 10);
    console.log(i);
}

// 8. naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius
// vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

let suma = 0;

while(suma <= 100){
    let i = randomSkaicius(0, 10);
    console.log(i);
    suma += i;
}

console.log(suma);

// 9. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius
// vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek
// ciklų prasisuko;

let i = 0;
let kartai = 0;

while(i != 5 && i != 7) {
    i = randomSkaicius(0, 10);
    console.log(i); 
    kartai++;
}

console.log('Ciklas prasisuko kartu: ' + kartai);

// 10. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n
// centimetrus coliais ir atvirkščiai.

let n = 10;

for(let i = 1; i <= n; i++) {
    console.log(i + ' coliai yra ' + i * 2.54 + ' cm');
}

// atvirksciai \/

let n = 10;
for(let i = 1; i <= n; i++) {
    console.log(i + ' cm yra ' + i / 2.54 + ' coliu');
}

// 11. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite
// kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas,
// indėlį.


let indelBanke = 100;
let nMetai = 10;
let palukanos_Norma = 0.02;
let palukanos = 0;

for(let i = 1; i <= nMetai; i++) {
    palukanos = indelBanke * palukanos_Norma;

    indelBanke = indelBanke + palukanos;
   
    console.log(`Su ${i} metais suma bus ideta ${indelBanke} gaunamos ${palukanos}`)
}

// 12. Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei
// tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už
// duotąjį, raskite tą skaičių.

let pradinis_sk;
let desimtys;
let vienetai;

for(let i = 10; i < 100; i++) {
    vienetai = i % 10;
    desimtys = Math.floor(i / 10);
    if((desimtys == vienetai * 3) && (vienetai * 10 + desimtys + 36 == i)) {
        console.log('skaicius yra: ' + i);
    }
}

// 13. Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina
// iš 998 ?

let pradzia = 2000;
let pabaiga = 8999;

for(let i = 2000; i < 9000; i++) {
    if(((Math.floor(i / 1000) % 2) == 0) && (i % 998) != 0);
    console.log(i);
}

// 14. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra
// keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600
// metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros
// keliamuosius metus.

for( let i = 1; i < 2022; i++) {
    if(((i % 4) == 0 && (i % 100) != 0)||(i % 400)) i == 0
    console.log(i);
    // if((i % 100) == 0 && (i % 400) == 0);
    console.log(i);

// 15. Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės
// tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus
// pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą,
// spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti
// nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie
// bilietų numeriai: 998 1002


//  16. Duotas natūralus skaičius n. Raskite pirmą skaitmenį

let naturalus = 7254;
let darbinis = naturalus;
let pirmas_sk;

while(darbinis != 0) {
    pirmas_sk = darbinis;
    darbinis = Math.floor(darbinis / 10);
}

console.log('Pirmas skaicius ' + pirmas_sk);

// 17. Duotas natūralusis skaičius n. Raskite skaitmenų sumą.

let naturSkaicius = 6;
let darb = natur;
let suma = 0;

while(darb != 0) {
    suma = darb % 10;
    darb = Math.floor(darb / 10); 
}

console.log('naturaliojo skaiciaus ' + natur + ' skaitmenu suma: ' + suma);

//  18. Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321

const skaiciai = 54087;
let work = skaiciai
let naujas = 0

while(work != 0) {
    naujas = naujas* 10 + work % 10
    work = Math.floor(work/ 10)
}
console.log(`Originalus skaičius yra ${skaiciai} atvirkšinis skaičius būtų ${naujas}`)

// 19. Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią
// skaitmenį.

const uzdav = 25476;
let working= uzdav;
let naujasMax= 0;
let naujasMin = 9;

while(working != 0) {
    let robotas = working % 10;
    if(robotas > naujasMax) {
        naujasMax = robotas;
    }
    if(robotas < naujasMin) {
        naujasMin = robotas;
    }
 working= Math.floor(working/10);
}
console.log(naujasMax);
console.log(naujasMin);

// 20. Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą,
// kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000.

let p_n = 0.05;
let ind = 100;
let met = 1;

while(ind < 100000) {
    ind = ind + ind * p_n;
    met++;
}

console.log('100 eur indelis su metine palukanu norma ' + p_n + 'virsys 100.000 eur po' + met + 'ir indelis bus' + ind);

// 21. Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo. Parašykite
// programą, kuri apskaičiuotų:
// a. Kiek žiedų buvo po n dienų
// b. Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų.

let ziedai = 1;
let dienos = 5;

for(let i = 1; i <= dienos; i++) {
    ziedai = ziedai * 2;
}
console.log('Po ' + dienos + 'dienu buvo ' + ziedai + ' ziedu.')

let m = 100;
ziedai = 1;
dienos = 0;

while(ziedai <= m / 2) {
    ziedai = ziedai * 2;
    dienos++;
}
console.log('Jei ezere telpa ' + m + 'ziedu, tai lelijos puse ezero uzklos per ' + dienos + ' dienas.')

// 22. Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių
// daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t. Parašykite
// programą, skaičiuojančią, kiek dienų d dirbs sodininkas, kol išgenės n sode augančių
// medžių. Paskutinei dienai gali likti mažiau medžių. Visi duomenys yra sveikojo tipo.
// Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet kompiuterio ekrane turi būti rodoma:
// Sodininkas dirbs 4 dienas.

const viso_me = 16;
let medziai = 3;
let daugiau = 1;
let viso_m = 16;
let dienu = 0;

while(viso_m > 0) {
    viso_m -= medziai;
    medziai += daugiau;
    dienos++; 
}

console.log('Sode buvo ' + viso_me + ' medziu. Sodininkas dirbo ' + dienu + ' dienas.');
