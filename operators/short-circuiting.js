const workout = {
  monday: {
    calves: 8,
    squats: 10,
    quads: 5
  }
};
const chestDay = 'Working chest day!';
let cardio;

/**
 * Operator: || (or)
 * 
 * evaluates `cardio` first, then produces `cardio` if it's "truthy",
 * but `cardio` is `undefined`, so "falsy", thus produces `chestDay`
 */
console.log('|| operator: ', cardio || chestDay); // Output: Working chest day!


/**
 * Operator: && (and)
 * 
 * evaluates `cardio` first, then produces `cardio` if it's "falsy",
 * but `cardio` is `undefined`, so "falsy", thus produces `undefined`
 */
console.log('\n&& operator: ', cardio && chestDay); // Output: undefined


/**
 * Operator: ?? (nullish coalescing)
 * 
 * evaluates `cardio` first, then produces `cardio` if `cardio` is not "null" and not "undefined",
 * but `cardio` is `undefined`, thus producess `chestDay`
 */
console.log('\n?? operator: ', cardio ?? chestDay); // Output: Working chest day!


/**
 * Operator: ? Conditional (ternary) operator
 * 
 * evaluates `cardio` first, then produces `undefined` if `cardio` is `null` or `undefined`,
 * but `cardio` is `undefined`, thus produces `chestDay`
 */
console.log('\n? operator: ', cardio ? cardio : chestDay); // Output: Working chest day!


/**
 * Operator: ? Optional chaining
 * 
 * evaluates `workout` first, then produces `undefined` if `workout` is `null` or `undefined`,
 * but `workout` is `truthy`, so we go further to `tuesday`,
 * but `tuesday` is `undefined`, thus produces `undefined`, without throwing `error of undefined`
 */
console.log('\n?. operator: ', workout?.tuesday?.glutes); // Output: undefined
