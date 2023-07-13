let current_users = ["eric", "john", "alice", "bob", "mike"];
let new_users = ["john", "mike", "steve", "lisa", "amy"];

for (let i = 0; i < new_users.length; i++) {
  let username = new_users[i].toLowerCase();

  if (current_users.includes(username)) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_users[i]}' is available.`);
  }
}
