// NORMAL FUNCTION
function getLarger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// getLarger(2, 3);
// getLarger(4, 5);

// ARROW FUNCTION
const getLargerArrow = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Compact arrow function
const squareFunction = a => a**2

// Challenge #3

// Concatenation
const farewell = name => "Goodbye forever, " + name;

// Template literals
const farewellFinal = name => `Goodbye forever, ${name}`

console.log(farewell("Kieran"))

// Challenge #4
const countDown = (start, stop, final) => {
    while (start > stop) {
        console.log(start)
        start--
    }

    if (start === stop) {
        console.log(final)
    }
}

const countDownFor = (start, stop, final) => {
    for (let i = start; i > stop; i--) {
        console.log(i)
    }

    console.log(final)
}

countDown(10, 5, "Blastoff!")