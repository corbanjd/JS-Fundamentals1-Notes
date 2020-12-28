/* https://www.w3schools.com/js/js_numbers.asp*/
/* Unlike in c sharp, javascript can be written with or without decimals in one type of numbers (no float values.)*/


var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals -- both are declared the same way.


/*Precision is given for up to 15 digits. */

var x = 999999999999999;   // x will be 999999999999999

var y = 9999999999999999;  // y will be 10000000000000000

/*max decimals are 17, but floating arithemtic is not always 100% accurate */

var x = 0.2 + 0.1;         // x will be 0.30000000000000

/* to solve problems accurately, simply * and divide them by 10 as you go.

I have a feeling this will be the key to doing the calculator tutorial! */


var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3


/*basic variable adding showcase here */

var x = 10;
var y = 20;
var z = x + y;           // z will be 30 (a number)

/* adding two strings - even if classified as numbers - is known as "concatenation" */

var x = "10";
var y = "20";
var z = x + y;           // z will be 1020 (a string)



/*adding a number and a string is also a concatentation */

var x = 10;
var y = "20";
var z = x + y;           // z will be 1020 (a string)

// this will net you 1020

var x = 10;
var y = 20;
var z = "The result is: " + x + y;


// this will net you 3030

var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;

//this is because javascript works from left to right... 1020 is the first result because we begin with a string interpretation which translates
//to concatenation

//where as 3030 is the second result because  we begin with string values but then by adding z end with a concatentation....

//however, number values that are stored as string values will always be stored during numeric operations.

var x = "100";
var y = "10";
var z = x / y;       // z will be 10

//the same rings true for multiplication

var x = "100";
var y = "10";
var z = x * y;       // z will be 100

//and even subtraction:

var x = "100";
var y = "10";
var z = x - y;       // z will be 90

//this is because + is the only operator that has both a concatenation arithemetic (to manipulate strings) AND an arithmetic property.

var x = "100";
var y = "10";
var z = x + y;       // z will not be 110 (It will be 10010)


//NaN is what is given when we expect a number but we don't get one...

var x = 100 / "Apple";  // x will be NaN (Not a Number)

// you can also use NaN to test whether certain variables are - in fact - numbers

var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number

// any use of NaN will result in NaN

var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN

// or, as will be seen below, a simple concatenation:

var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5

//Ironically enough, NaN is classified as a number, which returns Number when testing for it's type:

//NaN is a number: typeof NaN returns number:

Example
typeof NaN;            // returns "number"

//infinity is the value JS will return if you calculate a number outside the largest possible number

var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
    myNumber = myNumber * myNumber;
}

console.log(myNumber);

//dividing by zero also generates infinity

var x = 2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

///hexadecimal interpreter:

var x = 0xFF;        // x will be 255

//using toSTring 

/*
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

*/



var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

//numbers can also be objects.

//typically js numbers are primitive values created from literals... as will be seen below
//where x is a literal, and 123 is a number of this primitive literal value type


let x = 123;

//but numbers can also be defined as objects with the keyword new:

//here is how to do that

var y = new Number(123);

var x = 123;

var y = new Number(123);

//type of x will return numbers

//typeof y will return object.


// when using == these numbers will be equal to eachother. == is loose equality checking

var x = 500;
var y = new Number(500);

x == y;

//this is true because x and y have equal values, and though they are different data types. it really doesn't matter for this type of operator.


//then, cue the strict equality operator. this one, the data type matters.


var x = 500;
var y = new Number(500);

//and, as we can see, it's not going to work.