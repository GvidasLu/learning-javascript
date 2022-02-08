// let skaicius = 15;
// let skaicius1 = 5;
// let skaicius2 = 8;
// if (skaicius1 > skaicius2) {
//     console.log('Skaicius1 didesnis uz skaiciu2');
// } else if (skaicius1 == skaicius2) {
//     console.log('Skaiciai yra lygus');
// } else {
//     console.log('Skaicius1 yra mazesnis uz skaiciu2');
// }

// if (skaicius % 2 == 0){
//     console.log('Skaicius dalus is dvieju');
// } else {
//     console.log('Skaicius nedalus is dvieju');
// }
// let savaitesDiena = 5;

// if (savaitesDiena == 1) {
//     console.log('Pirmadienis');
// } else if (savaitesDiena == 2) {
//     console.log('Antradienis');
// } else if (savaitesDiena == 3) {
//     console.log('Treciadienis');
// } else if (savaitesDiena == 4) {
//     console.log('Ketvirtadienis');
// } else if (savaitesDiena == 5) {
//     console.log('Penktadienis');
// } else if (savaitesDiena == 6) {
//     console.log('Šeštadienis');
// } else {
//     console.log('Sekmadienis');
// }

// 1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? 
// Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: 
// Skaičius geras.

// let n = 20;
// if (n > 0) {
//     console.log('Skaicius geras');
// } else if (n < 0) {
//     console.log('Skaicius blogas');
// } else {
//     console.log('skaicius yra 0');
// }

// 2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, 
// kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-
// geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.

// let n = 3;
// if (n == 1) {
//     console.log('Eikite');
// } else if (n == 2) {
//     console.log('Palaukite');
// } else if (n == 3) {
//     console.log('Sustokite');
// }

// 3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas 
// į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar 
// Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: 
// Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai 
// d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes;

// let d = 3;
// let k = 18;
// let n = 5;
// if (d*n >= k) {
//     console.log('Knygos telpa į dėžes');
// } else {
//     console.log('Knygos netelpa į dėžes');
// }

// 4. Skaičius skaitomas skaitmenimis iš abiejų galų vienodai vadinamas polindromu. Pvz.: 
// 121. Žinomas 4-klis natūralus skaičius n. Nustatykite ar skaičius yra polindromas. 
// Pasitikrinkite: Kai n = 1221 , turėtume gauti: Skaičius polindromas; kai n=1223 tada 
// Skaičius nepolindromas

// Math.floor(); // apvalinimas į mažają pusę 4.4 -> 4, 4.9 ->4
// Math.round(); // paprastas apvalinimas 4.4 -> 4, 4.6 ->5
// Math.ceil(); // apvalinimas į didžiają pusę 4.6-> 5, 4.01 -> 5

// let n = 1234;
// let ketvirtas = n % 10; // 1) 1234 % 10 = 4;
// // let trecias = Math.floor(n / 10) % 10; // 1) n / 10 = 123,4; 2) Math.floor(123,4) = 123; 3) 123 % 10 = 3
// let a = n / 100;
// let b = Math.floor(a);
// let trecias = b % 10;
// let antras = Math.floor(n / 100) % 10; // 1) n / 100 = 12,34; 2) Math.floor(12,34) = 12; 3) 12 % 10 = 2
// let pirmas = Math.floor(n / 1000);  // 1) n / 1000 = 1,234; 2) Math.floor(1,234) = 1;

// if (pirmas == ketvirtas && antras == trecias) {
//     console.log('Skaicius polindromas');
// } else {
//     console.log('Skaicius nepolindromas');
// }

// 5. Loterijos bilietą sudaro šešiaženklis numeris. Loterijoje laimi tas bilietas, kurio numerio 
// skaitmenų suma dalosi iš 4. Nustatykite, ar loterijos bilietas n yra laimingas?. 
// Pasitikrinkite: Kai n = 222442, turėtume gauti: Bilietas laimingas

// let n = 222222;
// let sestas = n % 10;
// let penktas = Math.floor(n / 10) % 10;
// let ketvirtas = Math.floor(n / 100) % 10;
// let trecias = Math.floor(n / 1000) % 10;
// let antras = Math.floor(n / 10000) % 10;
// let pirmas = Math.floor(n / 100000);

// if ((pirmas+antras+trecias+ketvirtas+penktas+sestas) % 4 == 0){
//     console.log('Bilietas laimingas');
// } else {
//     console.log('Bilietas nelaimingas');
// }