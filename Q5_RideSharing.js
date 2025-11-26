class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (!this.distance || this.distance < 0) {
            throw new Error("Invalid distance: Distance must be a positive number");
        }
        const farePerKm = 15;
        return this.distance * farePerKm;
    }
}

const driver1 = new Driver("Rajesh", 4.5, "Toyota Etios");
console.log(`Driver: ${driver1.name}`);
console.log(`Rating: ${driver1.rating}`);
console.log(`Vehicle: ${driver1.vehicle}`);
console.log();

try {
    const trip1 = new Trip("Airport", "City Center", 25);
    console.log(`Trip from ${trip1.fromLocation} to ${trip1.toLocation}`);
    console.log(`Distance: ${trip1.distance} km`);
    console.log(`Fare: ₹${trip1.calculateFare()}`);
    console.log();
} catch (error) {
    console.log(`Error: ${error.message}`);
}

try {
    const trip2 = new Trip("Home", "Office", -10);
    console.log(`Trip from ${trip2.fromLocation} to ${trip2.toLocation}`);
    console.log(`Fare: ₹${trip2.calculateFare()}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
    console.log();
}

try {
    const trip3 = new Trip("Mall", "Restaurant", 0);
    console.log(`Trip from ${trip3.fromLocation} to ${trip3.toLocation}`);
    console.log(`Fare: ₹${trip3.calculateFare()}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
