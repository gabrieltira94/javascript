// Create an async iterable object
const asyncIterable = {
  [Symbol.asyncIterator]: async function* () {
    yield Promise.resolve('This');
    yield Promise.resolve('is');
    yield Promise.resolve('the');
    yield Promise.resolve('async');
    yield Promise.resolve('iterable');
    yield Promise.resolve('case.');
  },
};

// Use the for await...of loop to iterate over the async iterable
(async function () {
  for await (const item of asyncIterable) {
    console.log(item);
  }
})();
