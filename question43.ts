function make_great(magcians) {
    let great_magcians = [];
  
    for (let i = 0; i < magicians.length; i++) {
      great_magcians.push(`The Great ${magcians[i]}`);
    }
  
    return great_magcians;
  }
  
  let magcians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  let great_magcians = make_great(magcians.slice());
  
  show_magicians(magcians);
  show_magicians(great_magcians);
  