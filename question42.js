function make_great(magicans) {
    var great_magicans = [];
    for (var i = 0; i < magicans.length; i++) {
        great_magicans.push("The Great ".concat(magicans[i]));
    }
    return great_magicans;
}
var magicans = ["arham", "fida", "ali", "farhan"];
var great_magicans = make_great(magicans);
show_magicians(great_magicans);
