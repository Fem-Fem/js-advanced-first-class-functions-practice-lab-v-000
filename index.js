// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    Console.log(driver);
  });
}

const getTotalAmountForProducts = function (products) {
  let totalPrice = 0;

  products.forEach(function (product) {
    totalPrice += product.price;
  });

  return totalPrice;
};
