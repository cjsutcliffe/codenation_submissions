//Arrays Loops - Activity 1

let favSongs = [
    "Let It Be - The Beatles",
    "Bohemian Rhapsody - Queen",
    "Hotel California - The Eagles"
];

console.log(favSongs);

favSongs.push("Part-Time Lover - Stevie Wonder", "Easy Lover - Phil Collins")

console.log(favSongs);

favSongs.pop()

console.log(favSongs);

//Arrays Loops - Activity 2

let months = ["Jan", "March", "April", "June"];
console.log(months);

months.splice(1, 0, "Feb");

console.log(months);

months.splice(4, 1, "May");

console.log(months);

//Arrays Loops - Activity 3

//COMPLETE
//If we can create a loop to put 0-9 on the screen,
//how can we count from 9-0? Create a program that does this.

for(let i = 9; i >= 0; i--){
    console.log("i = ",[i]);
}

//Arrays Loops - Activity 4
//COMPLETE
//Displays 4 films stored in an array.
//Use a for loop to show each film in the array.
//Use an if statement to check if the 3rd film in the array is Ghostbusters.
//If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!

let films = ["Toy Story", "Top Gun", "Ghostbusters", "Jaws"];

//console.log(films);

for(let i = 0; i < films.length; i++){
    console.log(films[i]);
}
    if (films[3] = "Ghostbusters"){
        console.log("Yay it's Ghostbusters");
}


//Arrays Loops - Activity 5
//COMPLETE
// Generate a random number between 1 and 30 six times.
// For each random number generated, check if this number of divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not.

let randNum = [];
let divSeven = [];

//this bit generate 6x random numbers 1-30 and logs to array
//swapped out Math.floor for Math.ceil as was returning 0 values occasionally 
for(let i = 0; i <= 5; i++){
    randNum.push((Math.ceil(Math.random() * 30)));
}       
    console.log(randNum);

//this bit analyses array for values divisible by 7
for(let i = 0; i <= randNum.length; i++){
if(randNum[i] % 7 == 0){
    divSeven.push(i);
    }
}

//This bit checks the number of values in divSeven array if no values console logs 
if (divSeven.length == 0){
    console.log("None of these values are divisible by 7");
}

//This bit displays values which are divisible by 7
for(let i = 0; i < divSeven.length; i++){
    console.log(`${randNum[divSeven[i]]} is divisible by 7`); 
}

//Arrays Loops - Activity 6
// Complete
// Imagine you’re a programmer for a social media platform!
// You have been tasked with building a prototype for a mutual followers program

// Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings.
// Make sure there are 2 names that are in BOTH arrays

// Using a nested loop iterate over both arrays and console.log out the matching follower.

let bobsFollowers = ["Jeff", "Barry", "Susan", "Jane"]
let hannahsFollowers = ["Steve", "Barry", "Jane", "Sarah"]
let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < hannahsFollowers.length; j++){
        if(bobsFollowers[i] === hannahsFollowers[j]){
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log('Both networks have the mutual followers ' + mutualFollowers);

//Arrays Loops - Activity 7
//INCOMPLETE
// Research on do...while loop, find out about the difference between
// for loop, while loop and do...while loop. Give an example of each.
// What are the pros and cons?

//https://www.programiz.com/javascript/while-loop
//https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/


// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}

