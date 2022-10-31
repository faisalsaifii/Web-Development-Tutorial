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

document.write("Print stuff \n");
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
document.write(x, one); // Comma separated with a space
// Global Variables
// Types of Variables
// 1. Numbers
let y = -12.12;
// 2. Strings
let str = "String";
str = "He said, \"They all good\"";
// 3. Booleans
let b = false;
// 4. null
let n = null;
// 5. Undefined
// 6. Object
// 7. Symbol


// Functions
function func(para, para2){
    alert("Alert!!!" + para + para2 + "\n");
}
// Calling the function
func(1,2);

// return statement
function addNumbers(a,b){
    // Local Variable
    let c = a+b;
    return c;
}
document.write(addNumbers(3,5));

// Calling function from another function

function doFirst(){
    document.write("First ");
}
function doSecond(){
    document.write("Second\n");
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
    document.write("1 == 2 and 2 == 2\n");
}
else {
    document.write("1 != 2\n");
}

// Nesting
if(1==1){
    if(1==0)
        document.write("1==0\n");
    document.write("1==1\n");
}

// Switch
switch(str) {
    case "He said, \"They all good\"":
        document.write("First Case\n");
        break;
    case "Hello":
        document.write("Second Case\n");
        break;
    default:
        document.write("Default\n");
}

// For loop -> Entry control loop
for ( i = 1 ; i<4 ; i++ ) {
    document.write(i);
}

// While loop -> Entry control loop
var i = 1;
while(i<4){
    document.write(i);
    i++;
}

// Do While loop -> Exit control loop
i = 1;
do{
    document.write(i);
    i++;
}while(i<4);

// Event Handlers
// onclick = "JS Code" -> Inside HTML attribute of input