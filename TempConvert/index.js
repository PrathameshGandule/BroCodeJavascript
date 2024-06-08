let textBox = document.getElementById("textBox");
let tofah = document.getElementById("tofah");
let tocel = document.getElementById("tocel");
const result = document.getElementById("result");
let temp;

function convert(){
    if(tofah.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(tocel.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(2) + "°C";
    }
    else{
        result.textContent = `Select a unit`
    }
}
