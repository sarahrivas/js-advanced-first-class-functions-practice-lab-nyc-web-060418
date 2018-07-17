function logDriverNames(driverArr) {
  driverArr.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(driverArr, location) {
  const driversInDestination = driverArr.filter(function(driver) {
    return driver.hometown === location
  });
  logDriverNames(driversInDestination);
}

function driversByRevenue(driverArr) {
  const driverArrCopy = [...driverArr]
  return driverArrCopy.sort(function(a,b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(driverArr) {
  const driverArrCopy = [...driverArr]
  return driverArrCopy.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(driver) {
  const revArr = driver.map(function(element){
    return element.revenue;
  })
  return revArr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  });
}

function averageRevenue(driver) {
  return totalRevenue(driver)/driver.length;
}
