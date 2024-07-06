const numbers = document.querySelectorAll('.number');
const bar = document.querySelector('.numberBar');
let firstNumber = '';
let secondNumber = '';
let whichOperator = '';

run();

function run() {
    selectNumbers();
    deleteNumbers();
    clearBar();
}

function selectNumbers() {
    firstNumber = '';
    secondNumber = '';

    numbers.forEach((number) => {
        number.addEventListener('click', (e) => {
            bar.textContent += e.target.textContent;
        });
    });

    const operators = document.querySelectorAll('.operator');
    const equal = operators[3];

    operators.forEach((op) => {
        op.addEventListener('click', (e) => {
            let operator = e.target.textContent;
            switch (operator) {
                case "+":
                    if (firstNumber === '') {
                        firstNumber = parseFloat(bar.textContent);
                        bar.textContent = '';
                        whichOperator = "+";
                    }
                    break;
                case "-":
                    if (firstNumber === '') {
                        firstNumber = parseFloat(bar.textContent);
                        bar.textContent = '';
                        whichOperator = "-";
                    }
                    break;
                case "*":
                    if (firstNumber === '') {
                        firstNumber = parseFloat(bar.textContent);
                        bar.textContent = '';
                        whichOperator = "*";
                    }
                    break;
                case "/":
                    if (firstNumber === '') {
                        firstNumber = parseFloat(bar.textContent);
                        bar.textContent = '';
                        whichOperator = "/";
                    }
                    break;
                case "=":
                    if (firstNumber !== '' && bar.textContent !== '') {
                        secondNumber = parseFloat(bar.textContent);
                        let result = calculate(firstNumber, secondNumber, whichOperator);
                        bar.textContent = result;
                        firstNumber = ''; 
                        secondNumber = ''; 
                    }
                    break;
                default:
                    break;
            }
        });
    });
}

function deleteNumbers() {
    const del = document.querySelectorAll('.operator')[5];
    del.addEventListener('click', (e) => {
        bar.textContent = bar.textContent.slice(0, -1);
    });
}

function clearBar() {
    const clear = document.querySelectorAll('.operator')[6];
    clear.addEventListener('click', (e) => {
        bar.textContent = '';
        firstNumber = '';
        secondNumber = '';
    });
}

function calculate(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return 0;
    }
}
