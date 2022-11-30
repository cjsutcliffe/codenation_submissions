//If, Else, Switch - Activity 1
//COMPLETE
//Create a variable called age. Write an if statement that logs
//“Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.
//Stretch - Take your if statement and add a variable called country in.
//Eg. if age > 17 and country == “UK”.

let age = 19
let country = "UK"

if (age > "17" && country == "UK") {
    console.log("Yes I can serve you");
}
else {
  console.log("You aren't old enough");

}

//If, Else, Switch - Activity 2
//COMPLETE
//Create a variable for any pizza topping.
//Create a switch statement, if the topping is one of your favourite ingredients, log to the console
//“These are important ingredients for my pizza.” If you don’t mind having Pepperoni
//for example log to the console “I don’t mind having ${topping} on my pizza.
//Finally, for any topping you don’t like log “${topping} should not be on a pizza.”

let pizzaTopping = "Pineapple";

switch (pizzaTopping){
    case "Ham":
    case "Anchovies":
        console.log("These are important ingredients for my pizza");
        break;
    case "Pepperoni":
    case "Onions":
        console.log(`I don't mind having ${pizzaTopping} on my pizza`);
        break;
    case "Sweetcorn":
    case "Pineapple":
        console.log(`${pizzaTopping} should not be on a pizza`);
        break;
    default:
        console.log("I'm not sure that's even a pizza topping?!?!");        
}

//If, Else, Switch - Activity 3
//COMPLETE
//Create a variable called password.
//Check how many letters are in the password, if there are less than 8,
//log to the console that the password is too short. Otherwise log the password to the console.

let password = "imnottellingyou"

if (password.length < 8) {
    console.log("The password is too short");
}
else {
    console.log(password);
}

//If, Else, Switch - Activity 4
//COMPLETE
//Create a variable called num.
//Check if the variable is divisible by 3 or 5. 
//If it is, log “This number is divisible by 3 or 5”. Otherwise log something else.

let num1 = "45"
let divThree1 = (num1 % 3)
let divFive1 = (num1 % 5)

if (divThree1 == 0 || divFive1 == 0) {
    console.log("This number is divisible by 3 or 5");
}
else {
    console.log("This number is not divisible by 3 or 5");
}

//If, Else, Switch - Activity 5
// COMPLETE
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console,
// if it’s divisible by 5 log “buzz” to the console, 
// if it’s divisible by both 3 and 5 log “fizz buzz” to the console. 
// Otherwise log num to the console.

let num2 = "30"
let divThree2 = (num2 % 3)
let divFive2 = (num2 % 5)

if (divThree2 == 0 && divFive2 == 0) {
    console.log("fizz buzz");
}
else if (divThree2 == 0 && divFive2 != 0) {
    console.log("fizz");
}
else if (divThree2 != 0 && divFive2 == 0) {
    console.log("buzz");
}
else {
    console.log(num2)
}

//If, Else, Switch - Activity 6
//COMPLETE
//Create a variable called num.
//Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

let num3 = 101101
let reverse1 = parseInt(num3.toString().split('').reverse().join(''));

if (num3 == reverse1) {
    console.log(`${num3} is a palindromic number`);
}
else {
    console.log(`${num3} is not a palindromic number`);
}

//If, Else, Switch - Activity 7
//COMPLETE
//Create a variable called time, a variable called placeOfWork and a variable called townOfHome.
//Create an if statement that logs to the console where someone is at times of the day.
//E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = "0800"
let placeOfWork = "Rochdale"
let townOfHome = "Bury"

if (time == "0700") {
    console.log(`I'm at home in ${townOfHome}`);
}
else if (time == "0800") {
    console.log(`I am commuting`);
}
else if (time == "0900") {
    console.log(`I'm at work in ${placeOfWork}`);
}

//If, Else, Switch - Activity 8
//COMPLETE
//Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
//Find the index of a last vowel in the string.

let textString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh'
let vowels =  ('a','e','i','o','u');
let lastVowel = textString.lastIndexOf(vowels);

console.log(lastVowel);

//If, Else, Switch - Activity 9
//COMPLETE
//Create a variable called word that takes a string.
//Create an if statement that checks if the last letter is the same as the first.
//If it is return true, otherwise return false.

let word = "Australia"
let reverse2 = (word.split('').reverse().join(''));

console.log(word)
console.log(reverse2)

//Upper case as if statement is case sensitive
if(word.toUpperCase().charAt(0) == reverse2.toUpperCase().charAt(0)) {
    console.log("true")
}
else {
    console.log("false")
}

//If, Else, Switch - Activity 10
//COMPLETE
//Create two variables called num1 and num2. (changed as variable names conflicting with previous activities)
//Create an if statement that checks if the result of the sum is even.
//If it is return the number, otherwise return the numbers multiplied together.

let numOne = 63
let numTwo = 46

if ((numOne + numTwo) % 2 == 0) {
    console.log(numOne + numTwo);
}
else {
    console.log(numOne + numTwo);
}