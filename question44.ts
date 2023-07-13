function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
  }
  
  make_sandwich("bread", "ham", "cheese");
  make_sandwich("bread", "turkey", "lettuce", "tomato", "mayo");
  make_sandwich("baguette", "salami", "provolone", "peppers", "olives");
  