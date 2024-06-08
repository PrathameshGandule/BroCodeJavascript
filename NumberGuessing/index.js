const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * maxNum) + minNum;

let running = true
let attempts = 0
let guess

while(running){
    guess = window.prompt(`Enter a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)
    if(isNaN(guess) || guess < minNum || guess > maxNum){
        window.alert(`Enter a valid number to guess`)
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`TOO LOW ENTER AGAIN!`)
        }
        else if(guess > answer){
            window.alert(`TOO HIGH ENTER AGAIN!`)
        }
        else{
            window.alert(`Woohoo, correct answer was ${answer}, it took you ${attempts} attempts !!!`)
        }
    }
}
