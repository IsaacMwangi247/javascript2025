//Task 14
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
