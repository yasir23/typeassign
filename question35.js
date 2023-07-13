var animals = ["dog", "cat", "rabbit"];
for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    if (animal == "dog") {
        console.log("".concat(animal, "s make great pets."));
    }
    else if (animal == "cat") {
        console.log("A ".concat(animal, " would make a great pet."));
    }
    else {
        console.log("I think a ".concat(animal, " would be a good choice as a pet."));
    }
}
console.log("Any of these animals would make a great pet!");
