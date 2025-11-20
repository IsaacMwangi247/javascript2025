// Question 1

// let word = prompt("Enter word")
// if (word.length == 0){
//     console.log("Empty")
// }else if (word.length >=1 && word.length <=5){
//     console.log("Short")
// }else if (word.length >= 6 && word.length <= 10){
//     console.log("Medium")
// }else {
//     console.log("Long")
// }

// Question 2 checks age to determine ticket price
// let age = Number(prompt("Enter your age"))
// if (age < 12){
//     console.log("Pay 5", age)
// }else if (age < 18){
//     console.log("Pay 10", age)
// }else if (age < 60){
//     console.log("Pay 20", age)
// }else {
//     console.log("Pay 15", age)
// }

// Question 3 Write a program that calculates a discount based on the purchase amount

// let amount = Number(prompt("Enter total purchase amount"))
// if (amount >= 50 && amount <= 99){
//     console.log(`Total purchase of ${amount} qualifies for a 10 discount`)
// }else if (amount >= 100){
//     console.log(`Total purchase of ${amount} qualifies for a 20 discount`)
// }else {
//     console.log(`Total purchase of ${amount} does not qualify for a discount`)
// }

// Question 4 Write an if…else that prints "Match" 

// let val = prompt("Enter number 5")
// if (val == 5 && val !== "05" && val !== "5.0"){
//     console.log("Match")
// }else {
//     console.log("Does not match")
// }

// Question 5

// let variable = prompt("Enter variable")
// if (variable.length == 0 || variable == " "){
//     console.log("Empty")
// }else if (variable / Number(variable) == 1){
//     console.log("Number")
// }else {
//     console.log("Invalid")
// }

// Question 6

// let num = prompt("Enter a number")
// if (Number.isInteger(num)){
//     console.log("Integer")
// }else {
//     console.log("Not a number")
// }

// Question 7 assume january is 1 and decemeber 12

// let user_input = prompt("Enter month")

// if (user_input == 9 || user_input == 10 || user_input ==11){
//     console.log("The season is Autumn")
// }else if (user_input == 12 || user_input == 1 || user_input == 2){
//     console.log("The season is winter")
// }else if (user_input == 3 || user_input == 4 || user_input == 5){
//     console.log("The season is spring")
// }else if (user_input == 6 || user_input == 7 || user_input == 8){
//     console.log("The season is summer")
// }else if (user_input > 12){
//     console.log("Enter a valid month")
// }else {
//     console.log("Invalid")
// }

// Question 8: three numeric inputs

// let x = Number(prompt("Enter your number"))
// let y = Number(prompt("Enter your number"))
// let z = Number(prompt("Enter your number"))

// if (x > y && x > z)

// Question 9 Write a program to check whether the last digit entered by a user is divisible by 3

let value = prompt("Enter a value")

if(typeof(Number(value)) != "number"){
    console.log("Not a number-input numbers only")
}else if((value.slice(-1))%3 == 0){
    console.log("Last digit divisible by 3")
}else{
    console.log("Last digit not divisible by 3")
}


