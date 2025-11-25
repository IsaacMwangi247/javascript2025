//Area of a triangle 
// function triangleArea(base, height) {
    
//     return 0.5 * base * height;
// }
// let base = Number(prompt("Enter base"));
// let height = Number(prompt("Enter height"));

// let area = triangleArea(base, height);
// console.log(`The area of the triangle is: ${area}`);

//check odd or even
// Accept number from user
let num = Number(prompt("Enter a number:"));

// modulus operator
if (num % 2 === 0) {
console.log(`${num} is Even`);
} else {
console.log(`${num} is Odd`);
}

//question
function normalizePhoneNumber(phone) {
      // Remove spaces and dashes
      phone = phone.replace(/\s|-/g, "");
      
      if (phone.startsWith("+254")) {
        return phone;
      } else if (phone.startsWith("254")) {
        return "+254" + phone.slice(3);
      } else if (phone.startsWith("07")) {
        return "+254" + phone.slice(1);
      } else if (phone.startsWith("7")) {
        return "+254" + phone;
      } else if (phone.startsWith("01")) {
        return "+254" + phone.slice(1);
      } else if (phone.startsWith("1")) {
        return "+254" + phone;
      } else {
        return null; // invalid
      }
    }






