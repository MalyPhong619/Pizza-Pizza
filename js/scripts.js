function add(a, b, c) {
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
  this.startPrice = 5,
  this.toppingPrice = 0,
  this.proteinPrice = 0
}

// each topping is $1 = topping.length
Pizza.prototype.toppingsPrice = function() {
  this.toppingPrice += this.topping.length;
  this.proteinPrice += this.protein.length;
}

Pizza.prototype.Cost = function() {
  this.startPrice += add(this.size, this.proteinPrice, this.toppingPrice);
  $(".totalCost").text("Your total cost: " + "$" + this.startPrice);
  this.topping.forEach(function(topping) {
    $("#toppingsList").append("<li>" + topping + "</li>");
  })
  this.protein.forEach(function(protein) {
    $("#proteinList").append("<li>" + protein + "</li>");
  })
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
    var pizzaProtein = []; parseInt($("input:radio[name=protein]:checked").val());
    var pizzaToppings = [];

    $("input:checkbox[name=protein]:checked").map(function(){
      pizzaProtein.push($(this).val());
    })
    $("input:checkbox[name=toppings]:checked").map(function(){
      pizzaToppings.push($(this).val());
    })

    var pizza = new Pizza(pizzaSize, pizzaProtein, pizzaToppings);

    pizza.toppingsPrice();
    pizza.Cost();
    $(".pizzaOrderForm").hide();
    $(".completedOrder").show();
  });
});
