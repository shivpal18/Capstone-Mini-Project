// Assignment 5: Function Architecture and Scope

// Task: Define a standard function and an arrow function that accept parameters (e.g., length and width) with default values to calculate the area of a rectangle. Demonstrate function and block scope limits.


// 1. Standard Function
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    `Standard Function Area (Default 5x4): ${rectangleArea()}`
);


// 2. Arrow Function

const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    `Arrow Function Area (Custom 10x3): ${calculateArea(10, 3)}`
);



// 3. Function Scope

function scopeTest() {
    let functionVar = "I am inside the function";

    console.log(functionVar);
}

scopeTest();


// 4. Block Scope

{
    let blockVar = "I am inside the block";
    console.log(blockVar);
}
try {
    console.log(blockVar);
} catch (error) {
    console.log(`Scope Test Error: ${error}`);
}