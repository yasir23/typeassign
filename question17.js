var dinnerGuests = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla", "Marie Curie", "Leonardo da Vinci"];
console.log("We can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ", you are still invited to dinner. Please join us!"));
}
dinnerGuests.splice(0, 2);
console.log(dinnerGuests);
