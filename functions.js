//Functions - Activity 1
//COMPLETE
//Take this code and turn it into arrow function syntax:

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else{
//         return (n * factorial(n-1));
//     }
// }
 
// console.log(factorial(33));

//Arrow function syntax

const factorial = (n) => {
    if ((n===0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));

//Functions - Activity 2
//COMPLETE
//Edit the below snippet to include two parameters and a
//running order count updated when the function is called:

//let orderCount = 0;

// //const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");


let orderCount = 0;

const takeOrder = (topping1, topping2 ) => {
    console.log(`Pizza with ${topping1} and ${topping2} `);
    orderCount++;
}

takeOrder("pineapple", "ham");
console.log(`There are currently ${orderCount} orders.`)

takeOrder("pepperoni","green peppers")
console.log(`There are currently ${orderCount} orders.`)

takeOrder("ham","mushrooms")
console.log(`There are currently ${orderCount} orders.`)


//Functions - Activity 3
// COMPLETE
// Cash machine time! Let’s create one that:
// Dispenses cash if your pin number is correct and your balance is
// equal to, or more than, the amount you’re trying to withdraw!

function cashMachine (pin, withdrawal, balance) {
    if (pin == "4321") {
        if (withdrawal <= balance) {
            console.log("You can have your money")
        } else {
            console.log("No money for you today")
        }
    }
 }
    
cashMachine("4321", 127, 100)
cashMachine("4321", 27, 100)