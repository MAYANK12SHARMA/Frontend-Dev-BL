function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    const discount = (this.price * percent) / 100;
    return this.price - discount;
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Phone", 20000);
const product3 = new Product("Headphones", 3000);

console.log(`${product1.name} - Original Price: ₹${product1.price}`);
console.log(`After 10% discount: ₹${product1.applyDiscount(10)}`);
console.log();

console.log(`${product2.name} - Original Price: ₹${product2.price}`);
console.log(`After 15% discount: ₹${product2.applyDiscount(15)}`);
console.log();

console.log(`${product3.name} - Original Price: ₹${product3.price}`);
console.log(`After 20% discount: ₹${product3.applyDiscount(20)}`);
