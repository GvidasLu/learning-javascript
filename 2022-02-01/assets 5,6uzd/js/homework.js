// 5uzduotis
var randomSkaicius = Math.floor(Math.random() * 10) + 1;
document.getElementById('randomNumber').innerHTML = randomNumber;
console.log(Math.random() * 10);

// 6 uzduotis
document.getElementById('number1').addEventListener("click", function (e) {
        let skaicius1 = number1(-10, 10);
        let color1 = chooseColor (skaicius1);
        let skaicius2= randomSkaicius(-10, 10);
        let color2 = chooseColor (skaicius1);
        let skaicius3 = randomSkaicius(-10, 10);
        let color3 = chooseColor (skaicius1);
    document.getElementById('number1').innerHTML = `<span style="color:${color1}">${skaicius1}</span>`;
    document.getElementById('number2').innerHTML = `<span style="color:${color2}">${skaicius2}</span>`;
    document.getElementById('number3').innerHTML = `<span style="color:${color3}">${skaicius3}</span>`;
});

function chooseColor (x) {
    if (x < 0) {
        return '#ff0000';
    }
    
    if (x == 0) {
        return '#0000ff';
    }

    if (x > 0) {
        return '#00ff00';
    }
}

// 7 uzduotis

function randomSkaicius(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let zvakes = randomSkaicius(5, 3000);
document.getElementById("skaiciai").innerHTML = zvakes;
if (zvakes > 1000) {
  let suma = zvakes - (zvakes * 3) / 100;
  document.getElementsByClassName("suma")[0].innerHTML = suma;
}

function randomSkaicius(min, max) {
    let zvakes = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("skaiciai").innerHTML = zvakes;
    if (zvakes > 1000) {
        let suma = zvakes - (zvakes * 3) / 100;
        document.getElementsByClassName("suma")[0].innerHTML = suma;
      }
      if (zvakes > 2000) {
        let suma = zvakes - (zvakes * 4) / 100;
        document.getElementsByClassName("suma")[0].innerHTML = suma;
      }

  }
function bendras(){
randomSkaicius(5, 3000); sugeneruoti(1, 30);
}
  const mygtukas = document.getElementsByTagName('button')[0]
mygtukas.addEventListener('click', ()=> bendras());


// 9 uzduotis


// 10 uzduotis 
function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let a = randomSkaicius(0, 2);
  let b = randomSkaicius(0, 2);
  let c = randomSkaicius(0, 2);
  let d = randomSkaicius(0, 2);
  let kiekis0 = 0;
  let kiekisvienetu = 0;
  let kiekisdvejetu= 0;
  if(a === 0){
      kiekis0 = kiekis0 + 1
  }
  if(b === 0){
      kiekis0 = kiekis0 + 1
  }
  if(c === 0){
    kiekis0 = kiekis0 + 1
}

if(d === 0){
    kiekis0 = kiekis0 + 1 
}
// kiekis vienetu
if(a === 1){
    kiekisvienetu = kiekisvienetu + 1
}
if(b === 1){
    kiekisvienetu = kiekisvienetu + 1
}
if(c === 1){
    kiekisvienetu= kiekisvienetu + 1
}
if(d === 1){
    kiekisvienetu = kiekisvienetu + 1 
}
// kiekisdvejetu
if(a === 2){
    kiekisdvejetu = kiekisdvejetu + 1
}
if(b === 2){
    kiekisdvejetu = kiekisdvejetu + 1
}
if(c === 2){
    kiekisdvejetu= kiekisdvejetu + 1
}
if(d === 2){
    kiekisdvejetu = kiekisdvejetu + 1 
}

   console.log('cia yra a ', a, 'cia yra b', b ,'cia yra c', c ,'cia yra d', d) 
   console.log('----')
   console.log('nuliu kiekis', kiekis0, 'vienetu kiekis', kiekisvienetu, 'dvejetu kiekis', kiekisdvejetu)

//  jeigu tam paciam dive
document.getElementById('desimta').innerHTML =  a + '<br/>' + b + '<br/>' + c;

// 11 uzduotis \/
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let skaicius = randomSkaiciussssssssssss(1,6);
// document.getElementById('vienuolikta').innerHTML = <h${skaicius}>${skaicius}</h${skaicius}>;
document.getElementById('vienuolikta').innerHTML =  z;


// 12 uzduotis 
let pirmas = randomSkaiciusssss(0, 100);
let antras = randomSkaiciusssss(0, 100);
let trecias = randomSkaiciussss(0, 100);

let arimetrinisVidurkis = (pirmas + antras + trecias)/3;

let kiekis = 3;
let suma = 0

function tinkamas (x){
    if(x < 10 || x > 90){
        kiekis--; 
    } else {
        suma += x;
    }
}
tinkamas(pirmas)
tinkamas(antras)
tinkamas(trecias)

if(kiekis == 0){

}else{
    let vidurkis = suma/kiekis;
}

// 13 uzduotis 

'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Control') {
    // do not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    alert(`Key pressed ${keyName}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
}, false);