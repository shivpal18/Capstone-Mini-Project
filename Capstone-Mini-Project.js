// Capstone Mini Project
// Project Title: Interactive Product Inventory & Analytics Dashboard

// Project Overview: Students will build an integrated console-based application that combines all core JavaScript concepts into a single comprehensive program.

// INTERACTIVE PRODUCT INVENTORY & ANALYTICS

console.log("--- Initializing Inventory System ---");

// 1. Data & Input Initialization
// Pre-existing inventory
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// Get new product details from user
let productName = prompt("Enter new product name:");
let productPrice = prompt("Enter product price:");

// Explicit type conversion
productPrice = Number(productPrice);

// 2. Input Validation using if...else

if (
  productName === null ||
  productName.trim() === "" ||
  isNaN(productPrice) ||
  productPrice <= 0
) {
  console.log("Invalid product details. Please enter valid data.");
} else {
  const newProduct = {
    name: productName.trim(),
    price: productPrice,
  };

  inventory.push(newProduct);

  console.log(
    `[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`,
  );


  // 3. Category Assignment using switch

  function getCategory(price) {
    let category;

    if (price < 50) {
      category = "Budget";
    } else if (price < 200) {
      category = "Standard";
    } else {
      category = "Premium";
    }

    switch (category) {
      case "Budget":
        return "Budget";

      case "Standard":
        return "Standard";

      case "Premium":
        return "Premium";

      default:
        return "Unknown";
    }
  }

  
// 4. Processing Inventory using forEach

  console.log("\n--- Processing Inventory Roster (forEach) ---");

  inventory.forEach((product) => {
    const category = getCategory(product.price);

    console.log(
      `* Item: ${product.name} ($${product.price}) -> Category: ${category}`,
    );
  });

  
  // 5. Function for Total Inventory Value

  function calculateTotal(inventory) {
    let total = 0;

    inventory.forEach((product) => {
      total += product.price;
    });

    return total;
  }

  
  // 6. Arrow Function for Tax/Discount

  const applyAdjustment = (amount, tax = 0, discount = 0) => {
    let taxAmount = amount * (tax / 100);
    let discountAmount = amount * (discount / 100);

    return amount + taxAmount - discountAmount;
  };

  // Calculate total inventory value
  const totalValue = calculateTotal(inventory);

  // Example: 5% tax and 0% discount
  const adjustedValue = applyAdjustment(totalValue, 5, 0);

  
  // 7. Filter Affordable Products

  const affordableItems = inventory.filter((product) => {
    return product.price < 200;
  });

  
  // 8. Map - Formatted Report

  const formattedReport = inventory.map((product) => {
    return `${product.name.toUpperCase()}: $${product.price}`;
  });

  
  // 9. Financial Analytics

  console.log("\n--- Financial Analytics ---");
  console.log(`Total Inventory Value: $${totalValue}`);
  console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map((product) => product.name),
  );

  console.log("Formatted Report List:", formattedReport);
  console.log(`Total After 5% Tax: $${adjustedValue}`);
}