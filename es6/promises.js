async function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      // Resolve the promise with the fetched data
      resolve(data);
      // Reject the promise if an error occurs
      // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a 2-second delay
  });
}

// Use the fetchData function with promises
fetchData()
  .then((data) => {
    // Handle the resolved promise (success case)
    console.log('Data:', data);
  })
  .catch((error) => {
    // Handle the rejected promise (error case)
    console.error('Error:', error.message);
  });

// OR using await

await fetchData();