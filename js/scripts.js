function Add(a, b, c) {
  return a + b + c;
}

function Information(name, street, city, state) {
  this.name = name,
  this.street = street,
  this.city = city,
  this.state = state
}

Information.prototype.delivery = function() {
  $("#completedName").text(this.name);
  $("#completedAddress").append(this.street + "<br>" + this.city + ", " + this.state);
}

function Pizza(size, protein, topping) {
  this.size = size,
  this.protein = protein,
  this.topping = topping,
  this.startPrice = 5
}

Pizza.prototype.Cost = function() {
  this.startPrice += Add(this.size, this.protein, this.topping);
  $(".totalCost").text("Your total cost: " + "$" + this.startPrice);
}


// User Interface Logic
$(document).ready(function() {
  $(".orderForm").submit(function(event) {
    event.preventDefault();

    var userName = $("#formName").val();
    var userStreet = $("#formStreet").val();
    var userCity = $("#formCity").val();
    var userState = $("#formState").val();

    var information = new Information(userName, userStreet, userCity, userState);

    information.delivery();
    $(".pizzaOrderForm").show();
    $(".userInformation").hide();
  });
  $(".pizzaOrderForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaProtein = parseInt($("input:radio[name=protein]:checked").val());
    var pizzaToppings = parseInt($("input:radio[name=toppings]:checked").val());

    var pizza = new Pizza(pizzaSize, pizzaProtein, pizzaToppings);

    pizza.Cost();
    $(".pizzaOrderForm").hide();
    $(".completedOrder").show();
  });
});
