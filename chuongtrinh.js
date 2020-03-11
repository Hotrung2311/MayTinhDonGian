let clickedOperator = false; //flag
let calculate = 0;
let Xoatextbox = false;

let firstNumber;
let secondNumber;
let  result;

let display = document.getElementById("display");

console.log(calculate)
function displayNumber(number) {
    //let display = document.getElementById("display");

    //display.value = '';
    if(Xoatextbox === true){
        display.value = '';
    }
    if(clickedOperator === true){
        display.value = number;
        clickedOperator = false;
    } else{
        display.value += number;
    }
    console.log(firstNumber);
    Xoatextbox = false;
}

function plus() {
    clickedOperator = true;
    //firstNumber = number(display.value);
    firstNumber = display.value;
    if(Xoatextbox === true){
        display.value = '';
    }
    calculate = 1;
    console.log(calculate);
    Xoatextbox = false;
}

function minus() {
    clickedOperator = true;
    if(Xoatextbox === true){
        display.value = '';
    }
    firstNumber = display.value;
    calculate = 2;
    console.log(calculate);
    Xoatextbox = false;
}

function multiply() {
    clickedOperator = true;
    //firstNumber = number(display.value);
    firstNumber = display.value;
    if(Xoatextbox === true){
        display.value = '';
    }
    calculate = 3;
    console.log(calculate);
    Xoatextbox = false;
}

function division() {
    clickedOperator = true;
    firstNumber = display.value;
    //display.value = '';
    if(Xoatextbox === true){
        display.value = '';
    }
    calculate = 4;
    console.log(calculate);
    if(Xoatextbox === true){
        display.value = '';
    }
    Xoatextbox = false;
}

function equal() {
    if (calculate != 0){
        //secondNumber = number(display.value);
        secondNumber = display.value;
    }
    console.log(firstNumber);
    console.log(secondNumber);
    switch (calculate) {
        case 1:
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case 2:
            result = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case 3:
            result = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case 4:
            result = parseInt(firstNumber) / parseInt(secondNumber);
            break;
    }
    display.value ='';
    display.value = result;
    calculate = 0;
    Xoatextbox = true;
    //if (Xoatextbox)
}

function Delete() {
    firstNumber = '';
    secondNumber ='';
    result='';
    display.value = result;
    calculate = 0;
}

//let chuthich = firstNumber + secondNumber;
//document.getElementById("chuthich").innerHTML= chuthich;