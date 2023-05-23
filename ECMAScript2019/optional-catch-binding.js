// we can get rid of (err) if not needed
try {
  const something = 'another';

  console.log(something);

  throw new Error('Intended');
}
catch {
  console.log('Im written without catch (error)');
}
