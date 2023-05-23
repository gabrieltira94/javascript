// array destructure
const [alex, gabi, ...colleagues] = ['Alex', 'Gabi', 'Diana', 'Paul', 'Andreea'];
console.log(`Meet ${alex}, ${gabi}, and their colleagues ${colleagues}.`);


// object destructure
const mechanics = {
  engine: 'v8',
  fuel: 'gasoline',
  traction: 4
};

const { engine, fuel, traction } = mechanics;
console.log(`We'll drive a ${fuel} ${engine} car, with ${traction} wheel-drive`);
