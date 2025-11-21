function calculateBill() {
    var price = parseFloat(document.getElementById("price").value);
    var quantity = parseInt(document.getElementById("quantity").value);
    var total = price * quantity;
    if (total > 1000) total -= (total*0.10);
    document.getElementById("result").innerHTML = "Final Amount: ₹" + total;
    console.log(total);
}
