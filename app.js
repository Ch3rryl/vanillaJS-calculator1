const buttons = document.querySelectorAll('button')
const screen = document.querySelector('.screen')


let calculation = []
let completeCalc

// function to complete calculation
function calculate(button) {
    const value = button.textContent

    // clearing the calculation (i.e the array)
    if (value == "AC") {
        calculation = []
        screen.textContent = "."
    }
    // push pressed button numbers to an array
    calculation.push(value)
    // convert numbers in array to a string
    completeCalc = calculation.join('')
    // display string on caluclator screen
    screen.textContent = completeCalc
};
   



buttons.forEach(button => button.addEventListener('click',() => calculate(button)))
