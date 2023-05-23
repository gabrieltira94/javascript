// destructuring - allows us to destruct an object and collect the leftovers onto a new object
const calories = {
  proteins: 160,
  carbohydrates: 320,
  fats: {
    unsaturated: 30,
    saturated: 10
  },
  total: 2530
};

const { total, ...macronutrients } = calories;

console.log(`Total calories: ${total}`);

for (const [macro, quantity] of Object.entries(macronutrients)) {
  if (macro === 'fats') {
    const { saturated, unsaturated } = quantity;
    console.log(`I eat ${unsaturated} of healthy ${macro}, and maximum of ${saturated} saturated daily.`);
  }
  else {
    console.log(`I eat ${quantity} ${macro} daily.`);
  }
}