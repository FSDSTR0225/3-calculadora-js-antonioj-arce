const buttonsOpe = document.querySelectorAll('.buttons-operators');
const buttonsNum = document.querySelectorAll('.buttons-number');
const buttonResult = document.querySelector('.button-result');
const resetOperator = document.querySelector('.operator-reset');
let display = document.getElementById("display");


let a = '';
let b ='';
let operator = '';

resetOperator.addEventListener('click', function clear() {
    display.value = '';
    a = '';
    b = '';
    operator = '';
    document.getElementById('calculator').reset();
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

    }
    
    else if (a && operator === '^' && b) {
        let exp = exponent(Math.pow(Number(a),  Number(b))); 
        display.value = exp;
    }

    else if (a && operator === '√') {
        let squ = square(Math.sqrt(Number(a))); 
        display.value = squ;
    }

    else if (a && operator === '%' && b) {
        let por = product(Number(a), Number(b)) / 100;
        display.value = por;
    }
     else {
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

function exponent(a, b) {
    return a ^ b;
}

function square(a) {
    return a;
}



