$(document).ready(function() {
    function getTimeBasedGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning!";
        } else if (hour < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    }

    $("#greeting").text(getTimeBasedGreeting());

    $("#changeGreeting").click(function() {
        const quotes = [
            "Believe in yourself!",
            "You can do it!",
            "Stay positive!",
            "Keep moving forward!",
            "Success is yours!"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        $("#greeting").text(randomQuote);
    });

    $("#toggleMessage").click(function() {
        $("#welcomeMessage").toggle();
    });

    $("#greeting").click(function() {
        alert("Thank you for clicking the greeting!");
    });
});
