let animals = ["dog", "cat", "rabbit"];

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];

  if (animal == "dog") {
    console.log(`${animal}s make great pets.`);
  } else if (animal == "cat") {
    console.log(`A ${animal} would make a great pet.`);
  } else {
    console.log(`I think a ${animal} would be a good choice as a pet.`);
  }
}

console.log("Any of these animals would make a great pet!");
