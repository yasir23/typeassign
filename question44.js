function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
make_sandwich("bread", "ham", "cheese");
make_sandwich("bread", "turkey", "lettuce", "tomato", "mayo");
make_sandwich("baguette", "salami", "provolone", "peppers", "olives");
