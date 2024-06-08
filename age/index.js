const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("resultElement");
let age

mySubmit.onclick  = function(){
    age = myText.value;
    age = Number(age);
    if(age >= 120){
        result.textContent = `Hmm, looks like you are some mortal, please teach master oogway`
    }
    else if(age>=100){
        result.textContent = `You are too old to enter get off here grandpa`;
    }
    else if(age==0){
        result.textContent = `Bruhhhh, You can't enter you were just born`;
    }
    else if(age>=0 && age<=5){
        result.textContent = `Googoo, gaagaa`;
    }
    else if(age>=18){
        result.textContent = `OK, You are old enough to enter this site Now go pay your taxes`;
    }
    else if(age<0){
        result.textContent = `Your age can't be below 0 bruhhh`;
    }
    else{
        result.textContent = `Do your homework kid`;
    }
}

