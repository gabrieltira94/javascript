async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('This is your data!'), 2000);
  });
}

const main = async () => {
  const data = await fetchData();
  console.log(data);
};

main();
