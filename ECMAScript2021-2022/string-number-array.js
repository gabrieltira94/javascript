// introduced string.replaceAll(toReplace, withWhat) - replaces all occurencies of `toReplace` with `withWhat`
const text = 'We are using more and more words, to more express how replaceAll helps us more.';
console.log(text.replaceAll('more', 'less'));


// introduced string.at() - returns the letter at specified index
const atFeature = 'This is the at() function';
console.log(`What letter is at index 1? ${atFeature.at(1)}`);
// it starts from the end if provides negative value
console.log(`What letter is at index -1? ${atFeature.at(-1)}`);


// introduced visual numeric separator
const tenMillions = 10_000_000;
console.log(`Are these are equal? ${10000000 === tenMillions}`);


// introduced array.at() - returns the element at specified index
const muscles = ['back', 'biceps', 'shoulders'];
console.log(`What muscle is at index 1? ${muscles.at(1)}`);
// it starts from the end if provides negative value
console.log(`What muscle is at index -1? ${muscles.at(-1)}`);
