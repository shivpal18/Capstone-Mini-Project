// Assignment 4: Loop Control Structures

// Task: Write a for loop to print a multiplication table up to 5. Use a while loop with a break statement to find the first number greater than 10 that is divisible by 6, and a do...while loop that skips numbers using continue.


// 1. For Loop - Multiplication Table
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// 2. While Loop with Break

console.log("\n-- First number > 10 divisible by 6 --");

let number = 11;

while (true) {
    if (number > 10 && number % 6 === 0) {
        console.log(`Found: ${number}`);
        break;
    }

    number++;
}


// 3. Do...While Loop with Continue

console.log("\n-- Do...While with Continue --");

let count = 0;

do {
    count++;

    if (count % 2 === 0) {
        continue;
    }

    console.log(count);

} while (count < 5);