function checkGoal() {
    var steps = parseFloat(document.getElementById("steps").value);
    
    var message = steps >= 10000 ? "Goal Achieved" : "Keep Going";
    
    document.getElementById("result").innerHTML = message;
    
    var percentage = (steps / 10000) * 100;
    if (percentage > 100) percentage = 100;
    
    var offset = 408 - (408 * percentage / 100);
    document.getElementById("progressCircle").style.strokeDashoffset = offset;
    document.getElementById("progressText").innerHTML = Math.round(percentage) + "%";
}
