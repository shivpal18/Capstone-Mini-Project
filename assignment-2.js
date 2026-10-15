// Assignment 2: Operators, Expressions, and Input Handling

// Task: Use prompt() to capture a user's bill amount and tip percentage. Perform explicit type conversion (e.g., using Number()), compute the total using arithmetic and assignment operators, and log a formatted string.


// Take input from the user
let billAmount = prompt("Enter your bill amount:");
let tipPercentage = prompt("Enter tip percentage:");

// Explicit type conversion
billAmount = Number(billAmount);
tipPercentage = Number(tipPercentage);

// Calculate tip
let calculatedTip = billAmount * (tipPercentage / 100);

// Calculate total 
let totalAmount = billAmount;
totalAmount += calculatedTip;

// Display output
console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);