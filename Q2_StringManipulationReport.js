var productName = " wireless headphones PRO ";

var trimmed = productName.trim();

var lowercase = trimmed.toLowerCase();

var words = lowercase.split(" ");

var capitalized = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

var formatted = capitalized.join(" ");

var finalTitle = formatted.replace("Pro", "Pro Edition");

console.log("Cleaned Title: " + finalTitle);
console.log("Length: " + finalTitle.length);
