/*
function Car (make, model, year, color, passengers, convertible, mileage, started) {
    this.make = make; 
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = started;
    this.start = function() {
        this.started = true;
    },
    this.stop = function() {
        this.started = false;
    },
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " + this.model + "goes zoom zoom");
        } else {
            console.log("start the engine first");
        }
    };
}

var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021, false);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000, false);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892, false);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yello", 4, false, 281341, false);
console.log(cadi.color);

var cars = [chevy, fiat, cadi, taxi];
var i = 0;
while (i < cars.length) {  //for (var i = 0; i < cars.length; i++) {
    cars[i].drive();
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
    i++;
}
*/

function dogCatcher() {
    for (var i = 0; i < dogs.length; i++) {
        if (dogs[i] instanceof Dog) {
            console.log(dogs[i].name + " is a dog!");
        }
        else {
            console.log(dogs[i].name + " is a cat!");
        }
    }
}  
function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);
var fido = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        }
        else {
            alert(this.name + " says Yip!");
        }
    };
}
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];
dogCatcher();

var a = new Date();
console.log(a);
console.log(a.getFullYear());
console.log(a.getDay());

var b = new Date("December 16, 1985"); 
console.log(b);