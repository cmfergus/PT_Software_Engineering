// SECTION 1

/* What does DRY stand for?;

It means Don't Repeat Yourself. It is a coding principle that
is meant to reduce you repeating code. We should pay attention to 
because it will help us to always be mindful not to write too much 
or create repetitive code;
*/

/* What is the difference between const and let and var? 

CONST cannot be updated or re-declared once declared; 
LET can only be updated. You cannot declare LET twice;
VAR can be updated AND re-declared (from within its scope);
*/





// Section 2
// Boolean expressions

/* const a=4;
const b=53;
const c=57;
const d=16;
const e='Kevin'
const f=false;

if ( a < b) {
    console.log("True")
};

if (c > d) {
    console.log("True")
};

if ('Kevin' === 'Kevin') {
    console.log("True")
};

if ((a && b) || c) {
    console.log("True")
};

if ((4*4) || d) {
    console.log("True")
};

if (e == 'Kevin') {
    console.log("True")
};

if (48 === '48') {
    console.log("True")
};

if (f !== e) {
    console.log("True")
};

g=0;
console.log(g);

g= (b +c)
console.log(g)
*/

// Did you use const, let or var? 

/* 
I used var because var allowed me to update 
and re-delcare what the variable meant without
having to change the scope;
*/


// What happens if you don't use const, let, or var? Do you get an error? If so what does it say? 

/* 
If I do not use const, let or var then it should still work as normal. 
We hadn't declared g yet so we can just say g=0. When we console.log that
it'll show 0. Once we change it to b+c it will then console.log 110
because it is reading line to line in sequential order;
*/


// What happens if you write 10=g

/* 
You get the error SyntaxError: Invalid left-hand side in assignment
and it will not work;
*/




// SECTION 3

//Is this code below an infinite loop? Why or why not? 

/* 
Yes this would be an infinite loop because we did not define anything. 
We just put while "nothing" is true print do not run this loop;
*/

// INFINITE LOOP II

/* 
This loop would not run because we clared CONST = true initially.  
We are unable to re-declare or update the const variable;
*/

// Infinite or not infinite? What is the expected otupout? 

/*
I expect there to be a syntax error since we initially defined
runProgram= true; then runProgram= false; and you cannot re-assign
constant variable;





// READING CODE 

/*
let letters = "A";
let i = 0;

//start a while loop that will run as long as i is less than 20
while (i < 20) {
    // this is the same as adding A to A. As in AA
    letters += "A";
    //increments the value by 1
	i++;
}
//print letters (or A) until you get to 20 A's
console.log(letters);

*/





// Section 4

// For Loops

// What are the three components of the control panel? 

/* 
The first part of the control panel is: the initial condition
// The second part of the control panel is: a boolean expression
// The third part of the control panel is: postfix operator
*/


// For Loop II

// Write a for loop that will console.log the numbers 0 to 999

/* 
let num = 0
while (num <= 999) {
    console.log(num);
    num++;
}
*/ 


// Using a postfix operator (Links to an external site.) 
// i-- instead of i++, write a for loop that iterates in reverse. 
// Console.log a countdown from 999 to 0.// 

/* 
let num = 999
while (num >= 0) {
    console.log(num);
    num--;
}
*/




// Write a for loop that uses string concatenation to send a message
// to the console as well as the current value of i.
// The loop should run from 1 to 10.

/* 
let i=1
while (i <=10) {
    console.log("The value of i is: " + i + " of 10");
    i++;
}
*/




// Iteration

// Iterate over the StarWars array and print each element to the console.

/* 
array = ["Han", "C3P0", "R2D2", "Luke", "Leia", "Anakin"];
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
*/







//Iterate over the StarWars array again and print each 
//character's name as well as the value of i.

/* 
array = ["Han", "C3P0", "R2D2", "Luke", "Leia", "Anakin"];
for (i = 0; i < array.length; i++) {
    console.log(array[i] + ' ' + i);
}
*/




