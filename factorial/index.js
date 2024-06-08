let num = document.getElementById("num");
let result = document.getElementById("result");

function factorial(){
    let number = Number(num.value)
    if(number>=0){
        let fact=1;
        fact = Number(fact);
        for(let i=2 ; i<=number ; i++){
            fact = fact * i;  
        }
        result.textContent = fact;
    }else{
        result.textContent = "Invalid input"
    }
}