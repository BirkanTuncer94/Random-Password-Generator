const generate_button = document.getElementById("generate_button");
const numbers_check = document.getElementById("numbers");
const uppercase_check = document.getElementById("uppercase");
const lowercase_check = document.getElementById("lowercase");
const symbols_check = document.getElementById("symbols");
const select_number = document.getElementById("select-number");
const output = document.getElementById("password-output");
const copy_button = document.getElementById("copy_button");
const clear_button = document.getElementById("clear_button");

let letter_array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z","X","W","Q"];
let number_array = ["1","2","3","4","5","6","7","8","9","0"];
let symbol_array = ["@","#","%","&","(",")"];

generate_button.addEventListener("click",generate);
copy_button.addEventListener("click",copy);
clear_button.addEventListener("click",clear);

function generate(){
let number = select_number.value;
let integer = parseInt(number,10);

let password = "";
let password_pool = [];
let random;

if(numbers_check.checked === false && uppercase_check.checked === false && lowercase_check.checked === false && symbols_check.checked === false){
    alert("Cant be empty");
}
else{
    if(numbers_check.checked === true){
        for(let i = 0; i<= number_array.length-1; i++){
            password_pool.push(number_array[i]);
        }
    
    }
    if(uppercase_check.checked === true){
        for(let i = 0; i<= letter_array.length-1; i++){
            password_pool.push(letter_array[i]);
        }
    }
    if(lowercase_check.checked === true){
        for(let i = 0; i<= letter_array.length-1; i++){
            password_pool.push(letter_array[i].toLowerCase());
        }
    }
    if(symbols_check.checked === true){
        for(let i = 0; i<= symbol_array.length-1; i++){
            password_pool.push(symbol_array[i]);
        }
    }  
    for(let i = 0; i<=number-1; i++){
        random = Math.floor(Math.random()*password_pool.length);
        password += password_pool[random];   
    }

    console.log(password)
    output.innerHTML = password;
}
}

function copy(){
    output.select();
    document.execCommand("copy");
}

function clear(){
    output.innerHTML = "";
    numbers_check.checked = false;
    uppercase_check.checked = false;
    lowercase_check.checked = false;
    symbols_check.checked = false;
    select_number.value = 4
}