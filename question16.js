var dinnerGst = ["Albert Einstein", "Nikola Tesla", "Marie Curie"];
console.log("We found a bigger dinner table!");
dinnerGst.unshift("Isaac Newton");
dinnerGst.splice(2, 0, "Galileo Galilei");
dinnerGst.push("Leonardo da Vinci");
for (var i = 0; i < dinnerGst.length; i++) {
    console.log("Dear ".concat(dinnerGst[i], ", you are invited to dinner. Please join us!"));
}
