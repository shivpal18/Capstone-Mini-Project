// Assignment 3: Conditional Logic Implementation

// Task: Create a script that evaluates a user's numerical test score using if...else statements, determines a letter grade using a switch statement, and uses a ternary operator to print whether they passed or failed.


let score = Number(prompt("Enter your test score:"));

let grade;

// Using if...else to determine grade range
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Using switch statement to display the letter grade
switch (grade) {
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    case "F":
        grade = "F";
        break;
}

// Using ternary operator for pass/fail status
let status = score >= 40 ? "Passed" : "Failed";

// Display output
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);