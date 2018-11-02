$(document).ready(function() {
  $(".pizzaOrderForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    console.log(pizzaSize);

  });

});
