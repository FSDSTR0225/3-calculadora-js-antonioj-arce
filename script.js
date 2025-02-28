const buttonsOpe = document.querySelectorAll('.buttons-operators');
const buttonsNum = document.querySelectorAll('.buttons-number');
const buttonResult = document.querySelector('.button-result');
const resetOperator = document.querySelector('.operator-reset');
let display = document.getElementById("display");


let a = '';
let b ='';
let operator = '';

resetOperator.addEventListener('click', function() {
    display.value = '';
    a = '';
    b = '';
    operator = '';
});




buttonsNum.forEach(buttonsNumber => {
    buttonsNumber.addEventListener("click", function() {
    display.value += this.value;
    if (!operator) {
        a += this.value;
    } else {
        b += this.value;
    }
    });
});

buttonsOpe.forEach(buttonsOperator => {
    buttonsOperator.addEventListener("click", function() {
    if (a) {
    operator = this.value;
    display.value += ` ${operator} `;
    }

});
});



buttonResult.addEventListener("click", function() {
    if (a && operator === '+' && b) {
        let sum = add(Number(a), Number(b)); 
        display.value = sum;

    }
    else if (a && operator === '-' && b) {
        let subs = substract(Number(a), Number(b)); 
        display.value = subs;

    }

    else if (a && operator === '*' && b) {
        let mul = product(Number(a), Number(b)); 
        display.value = mul;

    }

    else if (a && operator === '/' && b) {
        let div = division(Number(a), Number(b)); 
        display.value = div;

    } else {
        display.value = 'Operacion incorrecta'
    }
});

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function product(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}