const menu = [
    { name: "Burger", price: 150 },
    { name: "Pizza", price: 300 },
    { name: "Pasta", price: 200 },
    { name: "Sandwich", price: 100 },
    { name: "Fries", price: 80 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        const menuItem = menu.find(m => m.name === item);
        if (!menuItem) {
            throw new Error(`Invalid item: ${item} is not on the menu`);
        }
        return menuItem.price;
    });

    const total = prices.reduce((sum, price) => sum + price, 0);
    return total;
}

try {
    const order1 = ["Burger", "Fries", "Pizza"];
    const bill1 = calculateBill(order1);
    console.log(`Order: ${order1.join(", ")}`);
    console.log(`Total Bill: ₹${bill1}`);
    console.log();
} catch (error) {
    console.log(`Error: ${error.message}`);
}

try {
    const order2 = ["Burger", "Coke", "Pizza"];
    const bill2 = calculateBill(order2);
    console.log(`Order: ${order2.join(", ")}`);
    console.log(`Total Bill: ₹${bill2}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

try {
    const order3 = ["Pasta", "Sandwich"];
    const bill3 = calculateBill(order3);
    console.log();
    console.log(`Order: ${order3.join(", ")}`);
    console.log(`Total Bill: ₹${bill3}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
