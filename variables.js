//Variables - Activity 1
let firstName = "Chris";
let favouriteColour = "Blue";
console.log(`My name is ${firstName} and my favourite colour is ${favouriteColour}`)
firstName = "Sally"
favouriteColour = "Orange"
console.log(`My name is ${firstName} and my favourite colour is ${favouriteColour}`)

//Variables - Activity 2
let breakfast = "Toast";
let lunch = "Cheese Sandwich";
let dinner = "Spagetti Bolognese";
console.log(`Today I ate ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`);
breakfast = "Musli";
lunch = "Sausage Roll";
dinner = "Pie";
console.log(`Tomorrow I will eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`);

//Variables - Activity 3
const birthDate = new Date ("1985-10-24");
// console.log(birthDate);
const todayDate = new Date();
// console.log(todayDate);
let daysSince = Math.ceil((new Date(todayDate) - new Date(birthDate)) / (1000 * 60 * 60 * 24));
console.log(`${daysSince} days since birth`);

//Variables - Activity 4
let space1="X";
let space2="O";
let space3=" ";
let space4="X";
let space5="X";
let space6=" ";
let space7="O";
let space8=" ";
let space9=" ";
console.log(`
    |   |   
  ${space1} | ${space2} | ${space3} 
    |   |   
 -----------
    |   |   
  ${space4} | ${space5} | ${space6} 
    |   |   
 -----------
    |   |   
  ${space7} | ${space8} | ${space9} 
    |   |   
 `)