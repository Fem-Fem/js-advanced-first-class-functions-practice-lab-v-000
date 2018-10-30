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

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
     return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  sortedDrivers = drivers
  sortedDrivers = sortedDrivers.sort(function (a, b) {
    return a.name - b.name;
  });
  return sortedDrivers
}
