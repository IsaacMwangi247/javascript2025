//Create a variable and console log whether a number is odd or even
//ternary operator

let number = Number(prompt("Enter your number"))
console.log(number %2 ==0 ? `${number} is even`: `${number} is odd`)

//Create a variable called year and enter the a random year. 
//leap year

let year = Number(prompt("Enter year"))
console.log(year %4 ==0 ? `${year} is a leap year`: `${year} is not a leap year`)

//Take as input from a user the temperature 
let temp = Number(prompt("Enter temperature"))
if(temp > 30){
    console.log("The temperature is too high")
}else if (temp <= 30 && temp >=15){
    console.log("Normal temperature")
}else {
    console.log("Cold temperature")
}


//student score and attendance
let student_score = Number(prompt("Enter student score"))
let student_attendance = Number(prompt("Enter student attendance"))

if (student_score > 90){
    if (student_attendance > 80){
        console.log("Excellent student")
    } else {
        console.log("Good score, but attendance needs improvement")
    }       
} else {
    console.log("Score needs improvement")
}


//js program that checks if a variable password is equal to the string "secret123"

let password = prompt("Enter password")
if (password == "secret123"){
    console.log("Access   granted")
}else {
    console.log("Access denied")
}