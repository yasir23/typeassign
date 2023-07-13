function make_great(magicans) {
      let great_magicans = [];
  
    for (let i = 0; i < magicans.length; i++) {
      great_magicans.push(`The Great ${magicans[i]}`);
    }
  
    return great_magicans;
  }
  
  let magicans = ["arham", "fida", "ali", "farhan"];
  
  let great_magicans = make_great(magicans);
  
  show_magicians(great_magicans);
  