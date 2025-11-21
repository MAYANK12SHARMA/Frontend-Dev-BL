function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    var bmi = weight / (height * height);
    
    var category = "";
    var color = "";
    
    if (bmi < 18.5) {
        category = "Underweight";
        color = "#3498db";
    } else if (bmi < 25) {
        category = "Normal";
        color = "#2ecc71";
    } else if (bmi < 30) {
        category = "Overweight";
        color = "#f39c12";
    } else {
        category = "Obese";
        color = "#e74c3c";
    }
    
    document.getElementById("bmiResult").innerHTML = "Your BMI: " + bmi.toFixed(2);
    document.getElementById("bmiCategory").innerHTML = "Category: " + category + 
        '<div class="progress-bar"><div class="progress-fill" style="background-color: ' + color + ';"></div></div>';
}
