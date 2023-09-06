let cake = "pistachio";

if (cake === "chocolate") {
    console.log("Delicious!")
} else if (cake == "red velvet") {
    console.log("Ugh")
} else {
   console.log("No cake then.") 
}

// TERNARY STATEMENT
cake === "chocolate" ? console.log("Delicious!") : cake == "red velvet" ? console.log("Ugh") : console.log("No cake then.") 

// CHALLENGE #1
const num = 50;

if (num >= 11) {
    console.log("High")
} else if (num < 3) {
    console.log("Low")
} else if (num === 7) {
    console.log("Exact")
} else {
    console.log("Medium")
}

// TERNARY STATEMENT
function example() {
  return num >=11 ? console.log("High")
    : num < 3 ? console.log("Low")
    : num == 7 ?  console.log("Exact")
    : console.log("Medium");
}

example()
