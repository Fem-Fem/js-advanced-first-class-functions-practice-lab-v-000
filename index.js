// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown == hometown) {
    console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown == hometown) {
    console.log(driver.name);
    }
  });
}

driversByRevenue() —
Receives an array of driver objects and returns a new array of driver objects
sorted by their revenue attribute from lowest to highest.
