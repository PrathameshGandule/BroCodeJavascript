function execute(){
    let lowercasebutton = document.getElementById("includeLowerCase")
    let uppercasebutton = document.getElementById("includeUpperCase")
    let charsbutton = document.getElementById("includeChars")
    let numsbutton = document.getElementById("includeNums")
    
    let passwordLength = document.getElementById("passwordLength").value;
    const includeLowerCase = lowercasebutton.checked ? true : false;
    const includeUpperCase = uppercasebutton.checked ? true : false;
    const includeChars = charsbutton.checked ? true : false;
    const includeNums = numsbutton.checked ? true : false;

    let result = document.getElementById("result");

    function generatePassword(length, includeLowerCase, includeUpperCase, includeChars, includeNums){

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const chars = "`~!@#$%^&*()_-+={[}]|\:;',<.>/?";
        const nums = "0123456789";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowerCase ? lowercaseChars : "";
        allowedChars += includeUpperCase ? uppercaseChars : "";
        allowedChars += includeChars ? chars : "";
        allowedChars += includeNums ? nums : "";

        if(length < 1){
            return `(password must be atleast 1 character)`;
        }

        if(allowedChars.length === 0){
            return `atleast 1 character must be allowed`;
        }

        for(let i=0 ; i<length ; i++){
            let randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        return password;
    }

    const password = generatePassword(passwordLength,
                                      includeLowerCase,
                                      includeUpperCase,
                                      includeChars,
                                      includeNums  
    );

    result.textContent = password;
    
}