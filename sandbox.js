// challenge 1: reverse words

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords('here is a sentence'));

// challenge 2: title case

// challenge 3: oddish or evenish 
// expected input 121
// expected output 'evenish' as a string because 1 + 2 + 1 = 4

function oddishOrEvenish(number) {
  const numb = number
    .toString()
    .split('')
    .map((digit) => {
      return parseInt(digit);
    })
    .reduce((oldDigit, newDigit) => {
      return oldDigit + newDigit;
    });
    
  return numb % 2 === 0 ? 'Evenish' : 'Oddish';

}

console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(421));


// function takes two words as arguments and returns true if they are anagrams
// expected: 'superintended', 'unpredestined'	true
// expecteD: 'pictorialness', 'documentarily'	false

function anagrams(wordOne, wordTwo) {
  // if they're anagrams, the words must be the same length
  const lengthOne = wordOne.length;
  const lengthTwo = wordTwo.length;
  
  if(lengthOne !== lengthTwo) {
    return false;
  } else {
    //   I want to break each word down into an array of letters, sort those arrays, and see if they're equal
    const stringOne = wordOne.split('').sort().join('');
    const stringTwo = wordTwo.split('').sort().join('');
        
    return stringOne === stringTwo ? true : false;
  } 
}

console.log(anagrams('mail', 'liam'));
console.log(anagrams('mails', 'liam'));
console.log(anagrams('tail', 'liam'));
