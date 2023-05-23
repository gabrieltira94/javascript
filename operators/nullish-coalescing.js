const genericSpeedLimits = {
  highway: 130,
  city: 50
}

const buildSpeedLimits = (limits) => {
  limits.highway ??= genericSpeedLimits.highway;
  limits.city ??= genericSpeedLimits.city;

  // if nationalWay is undefined or null, it will take value of 80
  limits.nationalWay ??= 80; // harcoding is not a good practice, serves for this example only

  return limits;
}

const romaniaSpeedLimits = buildSpeedLimits({ highway: 120, city: 50 })

console.log(romaniaSpeedLimits)
// Output: { highway: 120, city: 50, nationalWay: 80 }