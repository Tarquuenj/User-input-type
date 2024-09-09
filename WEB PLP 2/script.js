// Declare variables of different data types
let message = "Welcome to the Simple Calculator!"; // string
let isActive = true; // boolean
let version = 1.0; // number

// Log these variables to the console for debugging
console.log(message);
console.log("Is the calculator active?", isActive);
console.log("Version:", version);

// Define functions for simple operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Cannot divide by zero!";
    }
}

// Function to display the result on the page
function displayResult(result) {
    document.getElementById("result").textContent = "Result: " + result;
}

// Event listeners for buttons
document.getElementById("addBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = add(num1, num2);
    displayResult(result);
});

document.getElementById("subtractBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = subtract(num1, num2);
    displayResult(result);
});

document.getElementById("multiplyBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = multiply(num1, num2);
    displayResult(result);
});

document.getElementById("divideBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = divide(num1, num2);
    displayResult(result);
});
