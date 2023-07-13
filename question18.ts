let placesToVisit = ["Paris", "Tokyo", "New York", "Sydney", "Rome"];

console.log("Original order:");
console.log(placesToVisit);

console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort());

console.log("Original order:");
console.log(placesToVisit);

console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());

console.log("Original order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Original order:");
console.log(placesToVisit);

placesToVisit.sort();
console.log("Sorted in alphabetical order:");
console.log(placesToVisit);

placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);
