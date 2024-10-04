// -- PRICING CODE --

//Define regular prices
var plusPrice = '$599.99';
var siltPrice = '$299.99';
var litePrice = '$99.99';

//Define edu prices
var plusPriceEdu = '<span class="priceOld">$599.99</span> $499.99';
var siltPriceEdu = '<span class="priceOld">$299.99</span> $249.99';
var litePriceEdu = '<span class="priceOld">$99.99</span> $74.99';

//Define price elements
var plusPriceElement = document.getElementById('plusPrice');
var siltPriceElement = document.getElementById('siltPrice');
var litePriceElement = document.getElementById('litePrice');

//Set price elements to regular price
plusPriceElement.textContent = plusPrice;
siltPriceElement.textContent = siltPrice;
litePriceElement.textContent = litePrice;

//Check if edu checkbox is toggled
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('eduToggle');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        //set price elements to edu price
        plusPriceElement.innerHTML = plusPriceEdu;
        siltPriceElement.innerHTML = siltPriceEdu;
        litePriceElement.innerHTML = litePriceEdu;
      } else {
        //set price elements to regular price
        plusPriceElement.innerHTML = plusPrice;
        siltPriceElement.innerHTML = siltPrice;
        litePriceElement.innerHTML = litePrice;
      }
    });
  });

// -- COUNTDOWN CODE -- 
var specOffer = document.getElementById('specOffer');
var endDate = new Date("Oct 12, 2024 12:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = endDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
  var seconds = Math.floor((distance % (1000 * 60)) /1000);

  specOffer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
})