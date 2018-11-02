function add(a, b, c) {
  return a + b + c;
}

function Information(name, street, city, state) {
  this.name = name,
  this.street = street,
  this.city = city,
  this.state = state
}

Information.prototype.inputInfo = function() {
  if(this.name && this.street && this.city && this.state) {
    $(".pizzaOrderForm").show();
    $(".userInformation").hide();
  } else {
    $(".pizzaHeart").hide();
    $(".alertDiv").show();
  }
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
  this.proteinPrice = 2
}

Pizza.prototype.toppingsPrice = function() {
  this.toppingPrice += this.topping.length;
  this.proteinPrice += this.protein.length;
}

Pizza.prototype.cost = function() {
  this.startPrice += add(this.size, this.proteinPrice, this.toppingPrice);
}

Pizza.prototype.outputPizzaInfo = function() {
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

    information.inputInfo();
    information.delivery();
  });
  $(".pizzaOrderForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaProtein = []; 
    var pizzaToppings = [];

    $("input:checkbox[name=protein]:checked").map(function(){
      pizzaProtein.push($(this).val());
    })
    $("input:checkbox[name=toppings]:checked").map(function(){
      pizzaToppings.push($(this).val());
    })

    var pizza = new Pizza(pizzaSize, pizzaProtein, pizzaToppings);

    pizza.toppingsPrice();
    pizza.cost();
    pizza.outputPizzaInfo();
    $(".pizzaOrderForm").hide();
    $(".completedOrder").show();
  });
});
