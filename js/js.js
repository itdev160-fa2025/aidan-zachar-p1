var plusPrice = '$599.99';
var siltPrice = '$299.99';
var litePrice = '$99.99';

var plusPriceEdu = '<span class="priceOld">$599.99</span> $499.99';
var siltPriceEdu = '<span class="priceOld">$299.99</span> $249.99';
var litePriceEdu = '<span class="priceOld">$99.99</span> $74.99';

var plusPriceElement = document.getElementById('plusPrice');
var siltPriceElement = document.getElementById('siltPrice');
var litePriceElement = document.getElementById('litePrice');

plusPriceElement.textContent = plusPrice;
siltPriceElement.textContent = siltPrice;
litePriceElement.textContent = litePrice;

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('eduToggle');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        plusPriceElement.innerHTML = plusPriceEdu;
        siltPriceElement.innerHTML = siltPriceEdu;
        litePriceElement.innerHTML = litePriceEdu;
      } else {
        plusPriceElement.innerHTML = plusPrice;
        siltPriceElement.innerHTML = siltPrice;
        litePriceElement.innerHTML = litePrice;
      }
    });
  });

