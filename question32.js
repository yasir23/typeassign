var current_users = ["eric", "john", "alice", "bob", "mike"];
var new_users = ["john", "mike", "steve", "lisa", "amy"];
for (var i = 0; i < new_users.length; i++) {
    var username = new_users[i].toLowerCase();
    if (current_users.includes(username)) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_users[i], "' is available."));
    }
}
