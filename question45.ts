function describe_car(manufacturer, model, ...options) {
    let car = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < options.length; i += 2) {
      let key = options[i];
      let value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  let myCar = describe_car("Toyota", "Corolla", "color", "blue", "year", 2022);
  console.log(myCar);
  
  let anotherCar = describe_car("Honda", "Civic", "color", "red", "transmission", "automatic", "fuel", "gasoline");
  console.log(anotherCar);
  