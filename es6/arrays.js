const muscles = ['legs', 'chest', 'back'];

for (const key of muscles.keys())
  console.log(`Key: ${key}`);

const legs = muscles.find(muscle => muscle === 'legs');
console.log(`I found: ${legs}`);

const legsIndex = muscles.findIndex(muscle => muscle === 'legs');
console.log(`I found legs' index: ${legsIndex}`);

for (const entry of muscles.entries())
  console.log(`Entry: ${entry}`);
