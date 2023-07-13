function make_great(magcians) {
    var great_magcians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magcians.push("The Great ".concat(magcians[i]));
    }
    return great_magcians;
}
var magcians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var great_magcians = make_great(magcians.slice());
show_magicians(magcians);
show_magicians(great_magcians);
