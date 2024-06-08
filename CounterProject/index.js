//COUNTER PROGRAM

const decbtn = document.getElementById("decbtn");
const incbtn = document.getElementById("incbtn");
const resetbtn = document.getElementById("resetbtn");
const countLabel = document.getElementById("countLabel");
let count = 0

incbtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decbtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}