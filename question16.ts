let dinnerGs = ["Albert Einstein", "Nikola Tesla", "Marie Curie"];

console.log("We found a bigger dinner table!");

dinnerGs.unshift("Isaac Newton");
dinnerGs.splice(2, 0, "Galileo Galilei");
dinnerGs.push("Leonardo da Vinci");

for (let i = 0; i < dinnerGs.length; i++) {
  console.log(`Dear ${dinnerGs[i]}, you are invited to dinner. Please join us!`);
}
