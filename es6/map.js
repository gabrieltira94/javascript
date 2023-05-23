const laptops = [
  ['Macbook', 6],
  ['Lenovo', 8],
  ['Dell', 3]
];

const laptopsMap = new Map(laptops);

for (const key of laptopsMap.keys())
  console.log(`Key: ${key}.`);

console.log('----------------------------');

for (const entry of laptopsMap.entries())
  console.log(`Entry: ${entry}.`);

console.log('----------------------------');

for (const value of laptopsMap.values())
  console.log(`Value: ${value}.`);

console.log('----------------------------');

laptopsMap.forEach((stock, name) => console.log(`For each: ${name}, with stock of ${stock}.`));