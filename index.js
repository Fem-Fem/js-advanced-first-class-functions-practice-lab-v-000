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

// function driversByRevenue(drivers) {
//   sortedDrivers = drivers
//   sortedDrivers = sortedDrivers.sort(function (a, b) {
//     return a.revenue - b.revenue;
//   });
//   return sortedDrivers
// }

function driversByName(drivers) {
  sortedDrivers = drivers
  sortedDrivers = sortedDrivers.sort(function (a, b) {
    return a.name - b.name;
  });
  return sortedDrivers
}
