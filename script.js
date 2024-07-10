const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.calculator-screen');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            screen.value = '';
        } else if (value === '=') {
            if (previousInput && currentInput && operator) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                screen.value = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                if (previousInput) {
                    currentInput = eval(`${previousInput}${operator}${currentInput}`);
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
                screen.value = previousInput + operator;
            }
        } else {
            currentInput += value;
            screen.value = currentInput;
        }
    });
});

// Change background based on time of day
const hours = new Date().getHours();
if (hours >= 6 && hours < 18) {
    document.body.classList.add('day');
} else {
    document.body.classList.add('night');
}
