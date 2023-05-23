// Looping over Array
const seasons = [
  {
    name: 'Spring', duration: 3
  },
  {
    name: 'Summer', duration: 3
  },
  {
    name: 'Autumn', duration: 3
  },
  {
    name: 'Winter', duration: 3
  }
];

for (const season of seasons)
  console.log(`${season.name} lasts for ${season.duration} months.`);


// Looping over String
const something = 'What a String this is';

for (const letter of something)
  console.log(letter);