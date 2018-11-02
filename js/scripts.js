function Add(a, b, c) {
  return a + b + c;
}

function Pizza(size, protein, topping) {
  this.size = size,
  this.protein = protein,
  this.topping = topping,
  this.startPrice = 5
}

Pizza.prototype.Cost = function() {
  this.startPrice += Add(this.size, this.protein, this.topping);
  $(".completedOrder").text(this.startPrice);
}





// User Interface Logic
$(document).ready(function() {
  $(".pizzaOrderForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaProtein = parseInt($("input:radio[name=protein]:checked").val());
    var pizzaToppings = parseInt($("input:checkbox[name=toppings]:checked").val());

    var pizza = new Pizza(pizzaSize, pizzaProtein, pizzaToppings);

    console.log(pizza);

    pizza.Cost();


  });
});
