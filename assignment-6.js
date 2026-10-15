// Assignment 6: Arrays, Objects, and Core Methods

// Task: Create an array of product objects (with name and price properties). Use forEach() to print each product, filter() to find items under a certain price, and map() to create an array of formatted name-price strings.


// Create an array of product objects
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];


// 1. forEach() - Print all products

console.log("-- All Products (forEach) --");
products.forEach((product) => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});


// 2. filter() - Products under $50

const filteredProducts = products.filter((product) => {
    return product.price < 50;
});
console.log("\n-- Filtered Products (Price < $50) --");
console.log(filteredProducts);


// 3. map() - Create formatted product tags

const productTags = products.map((product) => {
    return `${product.name.toUpperCase()} costs $${product.price}`;
});
console.log("\n-- Mapped Product Tags (map) --");
console.log(productTags);