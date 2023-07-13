function describe_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
var myCar = describe_car("Toyota", "Corolla", "color", "blue", "year", 2022);
console.log(myCar);
var anotherCar = describe_car("Honda", "Civic", "color", "red", "transmission", "automatic", "fuel", "gasoline");
console.log(anotherCar);
