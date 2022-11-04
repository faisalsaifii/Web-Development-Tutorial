//Single line comment
/* Multi line comment */
		
// Write Function

// Escape Sequences/Characters
// \n -> New line
// \t -> Tab
// \b -> Backspace
// \r -> Return
// \f -> Formatted
// \' -> Single Quote
// \''-> Double Quote
// \\ -> Backslash

// In the new JS version semicolon(;) isn't really needed
// But will still run with it
console.log("Printing using console.log\n");
		
// VARIABLES
// Can only start with underscore(_) or alphabets
// Can't start with numbers or symbols
// Can contain anything except symbols($,%,&)
// Case sensitive

// VAR vs LET
// Avoid using var keyword
// A variable created using var gets the scope of the immediate function
// A variable created using let gets the scope of the immediate block
// Always use let keyword

// Const : Value can't be changed
// Let : Value changeable

let x = 23;
const one = 1;
console.log("Variable : ", x, "\nConstant : ", one, "\n"); // Comma separated with a space
// Global Variables
// Types of Variables
// 1. Numbers
let y = -12.12;
console.log("Number : ", y, "\n")
// 2. Strings
let str = "String";
str = "He said, \"They all good\"";
console.log("String : ", str, "\n")
// 3. Booleans
let b = false;
console.log("Boolean : ", b, "\n")
// 4. null
let n = null;
console.log("Null : ", n, "\n")
// 5. Undefined
// 6. Object
// 7. Symbol


// Functions
function makeAlert(){
    alert("Alert!!!\n");
}

function printNumber(a) {
    console.log("Printing through a function : ", a)
}
// Calling the function 
printNumber(1);

// return statement
function addNumbers(a,b){
    // Local Variable
    let c = a+b;
    return c;
}
console.log(addNumbers(3,5));

// Calling function from another function

function doFirst(){
    console.log("First ");
}
function doSecond(){
    console.log("Second\n");
}

function start(){
    doFirst();
    doSecond();
}

// Math Operators same as C and C++
// + , - , * , / , %
// Assignment Operator -> =
// Shorthand Notation -> var++ , var+=10, var(any math operator)=10

// if else statement
// && -> And
// || -> Or
if((1 == 2) && (2 == 2)) {
    console.log("1 == 2 and 2 == 2\n");
}
else {
    console.log("1 != 2\n");
}

// Nesting
if(1==1){
    if(1==0)
        console.log("1==0\n");
    console.log("1==1\n");
}

// Switch
switch(str) {
    case "He said, \"They all good\"":
        console.log("First Case\n");
        break;
    case "Hello":
        console.log("Second Case\n");
        break;
    default:
        console.log("Default\n");
}

// For loop -> Entry control loop
for ( i = 1 ; i<4 ; i++ ) {
    console.log(i);
}

// While loop -> Entry control loop
var i = 1;
while(i<4){
    console.log(i);
    i++;
}

// Do While loop -> Exit control loop
i = 1;
do{
    console.log(i);
    i++;
}while(i<4);

// Event Handlers
// onclick = "JS Code" -> Inside HTML attribute of input