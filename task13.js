
// Login system with 3 attempts

let attempts = 0;
const maxAttempts = 3;

while (attempts < maxAttempts) {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");

    if (email === "admin@mail.com" && password === "Admin@123") {
        alert("Login is Successful");
        break; // exit loop if login succeeds
    } else {
        attempts++;
        if (attempts < maxAttempts) {
            alert("Invalid username or password. Try again.");
        } else {
            alert("You have been blocked after 3 invalid attempts.");
        }
    }
}