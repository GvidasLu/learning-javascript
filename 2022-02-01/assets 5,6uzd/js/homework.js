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

