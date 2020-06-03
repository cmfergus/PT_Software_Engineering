// Create a loop that will print "hi" 15 times.

let num=0
while (num <= 15) {
    console.log("hi");
    num++;
};


//Create a loop that will print "YEP!" 30 times.

let num=0
while (num <= 30) {
    console.log("YEP!");
    num++;
};


// Create a variable called some_num and assign a random number.
var some_num= 20
// Create a loop that will run ten times (while or for loop, your choice!)
while (some_num <=30) {
    console.log(some_num)
    some_num++;
} 
// Inside the loop, print "that's a small number" if some_num is less than 10.
if (some_num < 10) {
    console.log("that's a small number");
} 
// Create another loop that will print "that's a big number" if the value of sum_num is greater than 20.
else if (some_num > 10) {
    console.log("that's a big number");
};
// Take these two loops and adjust them so that they can be used together. Write some code to deal with what happens if some_num is a value in between between 10 - 20.

var some_num=22
for (let i=0; i < 10; i++) {
    console.log(i);
} if (some_num < 10) {
    console.log("that's a small number");
} else if (some_num > 10 && some_num <= 20) {
    console.log("that's a random number");
} else if (some_num > 20) {
    console.log("that's a big number");
};

// Booleans & Loops - Part 2

var fav_day="Monday"
for (var i=fav_day; i == fav_day; i++) {
    if (fav_day == "Sunday") {
        console.log("I like the weekend");
    } else if (fav_day == "Monday") {
        console.log("Give me a good 'ol weekday");
    } else if (fav_day == "Tuesday") {
        console.log("Give me a good 'ol weekday");
    } else if (fav_day == "Wednesday") {
        console.log("Give me a good 'ol weekday");
    } else if (fav_day == "Thursday") {
        console.log("Give me a good 'ol weekday");
    } else if (fav_day == "Friday") {
        console.log("Give me a good 'ol weekday");
    } else if (fav_day == "Saturday") {
        console.log("I like the weekend");
    }
}