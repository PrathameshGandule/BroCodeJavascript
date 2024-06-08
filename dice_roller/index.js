//Dice roller program

function rollDice(){
    let numofDice = document.getElementById("numOfDice").value;
    let diceResult = document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];

    for(let i=0 ; i<numofDice ; i++){
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/dice_${value}.png" alt="dice${value}">`)
    }

    diceResult.textContent = `Dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
}