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

console.log(oddishOrEvenish(120));
