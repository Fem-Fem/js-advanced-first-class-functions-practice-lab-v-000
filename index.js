// Code your solution in this file!
// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

// const logDriversByHometown = function (drivers, location) {
//   drivers.forEach(function (driver) {
//     if (driver.location == location) {
//       console.log(driver.name)
//     };
//   });
// }

const driversByName = function (drivers) {
  drivers.sort(drivers);
};
