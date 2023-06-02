// Arrays

// 1. Indexed
// 2. Ordered
// 3. Mutable -> immutability
// 4. You can have multiple data types in an array

let numberArray = [1, 2, 3];

// Index 0, Index 1, Index 2...etc..
// console.log(numberArray[1])
// console.log(numberArray.length)
// numberArray[2] = "Hello"
// console.log(numberArray)

let multipleArray = [3.4, true, "Hello", ["apple", "banana", "kiwi"]];

// console.log(multipleArray[3][1])
// console.log(multipleArray.indexOf(["apple", "banana", "kiwi"]))

multipleArray.forEach(el => {
    if (Array.isArray(el)) {
        console.log(el.indexOf('kiwi'))
    }
})

// FOR LOOP
for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] *= 2
}

// FOR EACH loop
// multipleArray.forEach(el => console.log(el))

// Objects

// 1. NOT indexed - key:value pairs
// 2. NOT ordered
// 3. You can also have different data types in an object

const exampleObject = {
    firstName: "Simon",
    lastName: "Clemson",
    age: 35,
    hobbies: ["Tennis", "Running", "Reading"],
    foods: {
        first: "Pizza",
        second: "Sushi"
    }
}

// console.log(exampleObject["age"]);
// console.log(exampleObject.age);

// console.log(exampleObject.foods.first)

// console.log(exampleObject.hobbies[1])

// Challenge #5

function countTarget(arr, target) {
    return `success: ${arr.includes(target)}, count: ${arr.filter(el => el === target).length}}`
}


console.log(countTarget([1, 1, 1], 1))
console.log(countTarget([1, 1, 1], 3))


const countTarget = (arr, target) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++
        }
    }

    return {
        success: count > 0,
        count: count
    }
}

const countTarget = (arr, target) => {
    let object = { success: false, count: 0 };

    arr.forEach(el => el === target ? object.count++ : '');

    object.count != 0 ? object.success = true : null;

    return object
}