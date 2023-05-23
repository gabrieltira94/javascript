const workout = {
  monday: {
    calves: 8,
    squats: 10,
    quads: 5
  },
  wednesday: {
    cardio: 60
  }
};

/**
 * Operator: ? Optional chaining
 * 
 * evaluates `workout` first, then produces `undefined` if `workout` is `null` or `undefined`,
 * but `workout` is `truthy`, so we go further to `tuesday`,
 * but `tuesday` is `undefined`, thus produces `undefined`, without throwing `error of undefined`
 */
console.log('\n?. operator: ', workout?.tuesday?.glutes); // Output: undefined


/**
 * Operator: &&= Logical AND Assignment
 * 
 * If the first value is true, the second value is assigned.
*/
workout.tuesday &&= { biceps: 5 };
console.log('\n&&= operator: ', workout.tuesday); // Output: undefined


/**
 * Operator: ||= Logical OR Assignment
 * 
 * If the first value is false, the second value is assigned.
*/
workout.tuesday ||= { triceps: 5 };
console.log('\n||= operator: ', workout.tuesday); // Output: {triceps: 5}


/**
 * Operator: ??= Nullish Coalescing Assignment
 * 
 * If the first value is undefined or null, the second value is assigned.
*/
workout.wednesday ??= { forearms: 7 };
console.log('\n??= operator: ', workout.wednesday); // Output: {cardio: 60}
