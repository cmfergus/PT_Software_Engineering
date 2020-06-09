////////////////////////////////
// Easy Going
////////////////////////////////

 let num=0
while (num <= 20) {
    console.log(num);
    num++;
};



////////////////////////////////
// Get Even
////////////////////////////////


var i; 
for (i=0; i <= 200; i++)
if ((i % 2) == 0) {
    console.log(i);
};



////////////////////////////////
// Fizz Buzz
////////////////////////////////

var i; 
for (i=1; i <= 100; i++)
if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
} else if (i % 3 == 0) {
    console.log("Fizz");
} else if ((i % 5) == 0) {
    console.log("Buzz");
};


////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
const plantee = ["Plantee", "plant",  5001, "Mordor"]

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
const wolfy = ["Wolfy", "wolf", 16, "Gotham City"]

// Give D'Art a second hometown by adding "Hawkins"
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down", "Hawkins"]

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

const Gameboy = ["Wolfy", "wolf", 16, "Yukon Territory"]

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const turles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (name of turles){
 let yellAtTurtles = name.toUpperCase();
 console.log(yellAtTurtles);
};

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ["Jaws", "The Fellowship of the Ring", "Howl's Moving Castle", "Django Unchained", "Cloud Atlas", "The Usual Suspects", "Toy Story", "Conan the Barbarian", "Titanic", "Harry Potter", "Fried Green Tomatoes", "Volver", "Oculus", "Seven", "Black Panther", "Harry Potter Sorceror Stone", "Imitation of Life", "Snatch", "Fast and Furious"];
console.log(favMovies.indexOf('Titanic'));
favMovies.sort();
// the sort method sorts the elements in place and returns the sorted result in ascending order. 
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift("Fast and Furious");
favMovies.unshift("Fast and Furious");
var Remove = favMovies.splice(-4,1);
// removed Django Unchained from the list
favMovies.splice(3, 1, "Avatar");
// this permanentely changed our array because Django Unchained was removed from being element 3. But I still see it on the list? 
favMovies.slice(9, 18)
var newFavMovies = favMovies.slice();
console.log(newFavMovies);
console.log(favMovies);
console.log(favMovies.indexOf('Fast and Furious'));
// we get the value of 0 because we removed it 


////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
// var Remove = whereIsWaldo.splice(1,1);  
// console.log(whereIsWaldo);
                
I am stuck here


////////////////////////////////
//  Excited Kitten
////////////////////////////////
 
I am not sure how to do this part



////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
