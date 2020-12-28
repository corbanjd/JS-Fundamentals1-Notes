/*

https://javascript.info/variables

*


/*
declare a variable using let over var -- as var is becoming outdated.
*/

let message;

/*
store the value of message in another line
*/

message = hello;


let message;
message = 'Hello!';

alert(message); // shows the variable content



/*
Or, simply store the message in one single line.
*/

let message = 'Hello';


/* Here is a multi-variable defining and declaring process in one line. */

let user = 'John', age = 25, message = 'Hello';

/*For the sake of preserving readability, this is not reccomended. */

let user = 'John';
let age = 25;
let message = 'Hello';


/*we have a multiple variable defining and declaring process with both a comma first and after. */

let user = 'John',
    age = 25,
    message = 'Hello';

let user = 'John'
    , age = 25
    , message = 'Hello';

/* Older scrripts, including ones I have written - use var This is old school and not reccomended. */

var message = 'Hello';

/* if a variable is defined multiple times, the definition it is given last will stick: */

let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);

/* Repeated declarations, however, will in fact lead to an error. */

let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared

/*JS has two limitations. It must 1.) contain only letters, digits or the $ and _... and 2.) the first character must not be a digit */

let userName;
let test123;


let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

/*The above declarations and processes are valid. What's below is not. */

let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name


/*reserved names cannot be defined: for example */

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!

/*use strict is used to keep scripts up to date. If "use-strict" is not within a script, then you can define variables in an old school way
without having to use let or var, like so : */
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5


"use strict";

num = 5; // error: num is not defined


/*Constans are unchanging variables. Using const instead of let would be great for something like - for example - a birthday. */

const myBirthday = '18.04.1982';

/*constants are particularly useful for keeping variables static. */
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

/*Why are uppercase constants used? typically for prior-agreed-upon values of variables -more than likely from a dev team. Here are some examples. */

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

const pageLoadTime = /* time taken by a webpage to load  This is an example of a bad constant.*/;

let admin;

let name = "john";

admin = name;

alert(admin);

