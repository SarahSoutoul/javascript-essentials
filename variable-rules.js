// VAR

// No initialization
var greeter;

// Updating
var greeter = "Hey"
greeter = "Hello"

//Redeclaring
var greeter = "say hello instead"

// SCOPE
// Global scope
var tester = "hey";

function newFunction() {
    // Function scope
    var hello = "hello";
    console.log(hello) // defined
}

//Undefined
console.log(hello)

//Defined
console.log(tester)

// LET

// No initialization
let string = "I love sushi";

// updating
string = "I love burgers"

// NO redeclaring
// let string = "I love pizza";

// SCOPE
// Global scope
let greeting = "say Hi";

if (true) {
    // Block scope
    let greeting = "say Hello instead";
    console.log(greeting) // DEFINED "say hello instead"
}

console.log(greeting) // DEFINED "say hi"

// CONST

//Initialization
const number = 0;

// CANNOT REDECLARE OR UPDATE WITH CONST