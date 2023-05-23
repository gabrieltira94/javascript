// .entries() - returns an array of the key/value pairs in an object
const human = {
  head: 1,
  hands: 2,
  legs: 2,
  species: 'mamifer',
  needsCoffee: true
};

// remember arrray destructure
for (const [property, value] of Object.entries(human))
  console.log(`Human has ${property}, with a value of ${value}`);


// .values() - returns a single dimension array of the object values
const cardio = ['20m walking', '30m cycling'];
const workouts = {
  monday: 'push',
  wednesday: 'pull',
  friday: 'legs',
  saturday: cardio
};

for (const value of Object.values(workouts))
  console.log(`Value: ${value}`);