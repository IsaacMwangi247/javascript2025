//Task 12
// Largest of 4 numbers in JavaScript

// Take 4 inputs from the user
// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// let num3 = parseFloat(prompt("Enter third number: "));
// let num4 = parseFloat(prompt("Enter fourth number: "));

// // Find the largest using Math.max
// let largest = Math.max(num1, num2, num3, num4);

// // Print the result
// console.log(`\nThe largest number is: ${largest}`);

//Task 14
// Pure JavaScript (browser version)
// Add two numbers with validation

function getValidNumber(message) {
    while (true) {
        let input = prompt(message);   // ask user for input
        let number = parseFloat(input);

        // Check if input is a valid number (not NaN and not empty string)
        if (!isNaN(number) && input.trim() !== "") {
            return number;
        } else {
            alert("Invalid character entered. Please re-enter the input.");
        }
    }
}

// Get two valid numbers
let num1 = getValidNumber("Enter first number:");
let num2 = getValidNumber("Enter second number:");

// Add them
let sum = num1 + num2;

// Display result
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
