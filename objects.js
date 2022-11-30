//Objects - Activity 1
//COMPLETE
//Let’s edit our person object to include...
//A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”

const person = {
    name: "Chris",
    age: 37,
    favSongs: ["Easy Lover - Phil Collins","Under the Bridge - RHCP","Hotel California - The Eagles"],

    sayHi(){
        return `Hello my name is ${this.name}`
    }
}

console.log(person.sayHi());

//Objects - Activity 2
//COMPLETE
//Create an object called pet with the key values of: name, typeOfPet, age, colour
//And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.

const pet = {
    name: "Rover",
    typeOfPet: "Dog",
    age: 4,
    colour: "Brown",
    
    eat(){
        return `${this.name} is eating.`;
    }, 
    drink(){
        return  `${this.name} is drinking.`;
    },
    sleep(){
        return  `${this.name} is sleeping.`;
    },
}

console.log(pet.sleep());
console.log(pet.eat());
console.log(pet.drink());

//Objects - Activity 3
//COMPLETE
//Create an object called coffeeShop with key values of:
//branch, drinks with prices, food with prices
//And methods called drinksOrdered and foodOrdered.
//They should return a string saying [Your order] is ... with all items chosen with costs and total costs.

const coffeeShop = {
    branch: "Bury",
    drinks: ["Coffee", "Tea", "Hot Chocolate"],
    drinkPrices: [2.50, 2.00, 3.50],
    food: ["Bacon Sandwich", "Sausage Sandwich", "Eggs Benedict"],
    foodPrices: [3.50, 3.75, 5.75],
    total: 0,

    foodOrdered (food1) {
        idx = this.food.indexOf(food1);
        foodCost = this.foodPrices[idx];
        console.log(`Your ${food1} costs £${foodCost}`)
        this.total += foodCost
        return(`The total bill is £ ${this.total += foodCost}`)
    },


    drinksOrdered (drink1) {
        idx = this.drinks.indexOf(drink1);
        drinkCost = this.drinkPrices[idx];
        console.log(`Your ${drink1} costs £${drinkCost}`)
        return(`The total bill is: £${this.total += drinkCost}`)
    }
}

console.log(coffeeShop.foodOrdered("Bacon Sandwich"));
console.log(coffeeShop.foodOrdered("Eggs Benedict"));
console.log(coffeeShop.drinksOrdered("Tea"));
console.log(coffeeShop.drinksOrdered("Hot Chocolate"));
