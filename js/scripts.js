function Pizza(size, protein, topping) {
  this.size = pizza,
  this.protein = protein,
  this.topping = topping,
  this.startPrice = 5
}



// User Interface Logic
$(document).ready(function() {
  $(".pizzaOrderForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaProtein = parseInt($("input:radio[name=protein]:checked").val());
    var pizzaToppings = parseInt($("input:checkbox[name=toppings]:checked").val());




  });
});
