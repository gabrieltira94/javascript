// ...values allows to specify as many parameters as we want
function total(...values) {
  return values.reduce((total, value) => total += value, 0);
}

const sum = total(1, 2, 3, 4, 5, 6, 7);
console.log(sum);


// ...rest allows to load all other elements execept for the first 2 positions
// into `rest` variable
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(`a=${a}, b=${b}, rest=${rest}`);
