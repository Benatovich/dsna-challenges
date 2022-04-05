// recursion
// start with the exit, look for minimal number of steps to call function recursively

function sum(n) {
  // 1. write out the exit
  if (n === 0) return 0;
  // 2. find the quickest route to recall the function
  return n + sum(n - 1);
}
console.log(sum(1));
console.log(sum(4));
console.log(sum(7));
console.log(sum(12));
  
function addPunctuation(punctuation) {
  // create a function that takes a sentence and adds the punctuation
  // from the addPunctuation call (see numberAdder)
}
  
const addExcitement = addPunctuation('!!!');
const excitedSentence = addExcitement('Hello, world'); // Hello, world!!!
const addUnsure = addPunctuation('?!');
const unsureSentence = addUnsure('Really'); // Really?!
  
