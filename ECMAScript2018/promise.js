// .finally() - Allows us to execute another statement even wether or not the promise succedeed
const promise = new Promise(resolve => resolve("I'm from resolve()!"));

promise
  .then(result => console.log(result))
  .finally(() => console.log("I'm from finally()!"));
