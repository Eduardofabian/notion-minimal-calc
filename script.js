let currentInput = '';
const display = document.getElementById('display');

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        // eval é usado aqui pra simplificar, mas em projetos grandes exige cuidado
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.innerText = 'Erro';
        currentInput = '';
    }
}
