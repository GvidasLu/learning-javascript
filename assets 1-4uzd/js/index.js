//Globalus objektas document
document.getElementById('rezultatas').classList.add('klase');
// 1 uzduotis
var vardas = 'Dziozefas';
var pavarde = 'Kleminskis';
var gimes = '1988-08-08';

console.log('Aš esu, ' + vardas + ' ' + pavarde + ' gimęs ' + gimes);

// aiskesnis funkcijos pavizdys
function generuojaStringa(vardas, pavarde, gimes) {
    console.log('Is funkcijos Aš esu, ' + vardas + ' ' + pavarde + ' gimęs ' + gimes);
}

generuojaStringa(vardas, pavarde, gimes);

generuojaStringa('Jonas', 'Bebrauskas', '1988-08-18');


console.log('----------------------2 uzduoties pradzia------------------------')

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomSkaicius(0, 10);

  var randomSkaiciusIsFunkcijos = randomSkaicius(0, 10);
  console.log(randomSkaiciusIsFunkcijos);

  console.log('-------------------------2 uzduoties pabaiga-----------------------------')

  console.log('-------------------------3 uzduoties pradzia-----------------------------')
  var rezultatas = 0;

  var pirmasKintamasisNuoNulioIkiKeturiu = randomSkaicius(0, 4);
  console.log(pirmasKintamasisNuoNulioIkiKeturiu);

  var antrasKintamasisNuoNulioIkiKeturiu = randomSkaicius(0, 4);
  console.log(antrasKintamasisNuoNulioIkiKeturiu);

//   Atimtis
  rezultatas = pirmasKintamasisNuoNulioIkiKeturiu - antrasKintamasisNuoNulioIkiKeturiu;
  console.log(pirmasKintamasisNuoNulioIkiKeturiu + ' - ' + antrasKintamasisNuoNulioIkiKeturiu + ' = ' + rezultatas);

// Sudetis
rezultatas = pirmasKintamasisNuoNulioIkiKeturiu + antrasKintamasisNuoNulioIkiKeturiu;
  console.log(pirmasKintamasisNuoNulioIkiKeturiu + ' + ' + antrasKintamasisNuoNulioIkiKeturiu + ' = ' + rezultatas);

//   Daugyba
rezultatas = pirmasKintamasisNuoNulioIkiKeturiu * antrasKintamasisNuoNulioIkiKeturiu;
  console.log(pirmasKintamasisNuoNulioIkiKeturiu + ' * ' + antrasKintamasisNuoNulioIkiKeturiu + ' = ' + rezultatas);

// Dalyba
rezultatas = pirmasKintamasisNuoNulioIkiKeturiu / antrasKintamasisNuoNulioIkiKeturiu;
  console.log(pirmasKintamasisNuoNulioIkiKeturiu + ' / ' + antrasKintamasisNuoNulioIkiKeturiu + ' = ' + rezultatas);

  console.log('-------------------------3 uzduoties pabaiga-----------------------------')


  console.log('-------------------------4 uzduoties pradzia-----------------------------')

var pirmojiKintamojoReiksme = randomSkaicius(0, 25);
var antrojiKintamojoReiksme = randomSkaicius(0, 25);
var treciojiKintamojoReiksme = randomSkaicius(0, 25);


console.log(pirmojiKintamojoReiksme);
console.log(antrojiKintamojoReiksme);
console.log(treciojiKintamojoReiksme);
var maziausias = Math.min(pirmojiKintamojoReiksme, antrojiKintamojoReiksme, treciojiKintamojoReiksme);
console.log('maziausiasIsTrieju ' + maziausias);

var didziausias = Math.max(pirmojiKintamojoReiksme, antrojiKintamojoReiksme, treciojiKintamojoReiksme);
console.log('didziausiasIsTrieju ' + didziausias);

// var bendra suma
var suma = pirmojiKintamojoReiksme + antrojiKintamojoReiksme + treciojiKintamojoReiksme;

// vidurinio skaiciaus paieska
var vidurinisSkaicius = suma - maziausias - didziausias;
console.log('vidurinisSkaicius ' + vidurinisSkaicius);

  console.log('-------------------------4 uzduoties pabaiga-----------------------------')

