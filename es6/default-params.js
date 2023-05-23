// If vat param value not provided, 0.19 will be assigned
function calculateGrossPrice(value, vat = 0.19) {
  console.log(`VAT value: ${vat}`);

  return value + vat * value;
}

const apple = calculateGrossPrice(0.6);
const laptop = calculateGrossPrice(0.6, 0.21);

console.log(`Apple price: ${apple}`);
console.log(`laptop price: ${laptop}`);
