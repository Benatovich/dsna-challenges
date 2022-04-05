// Write a function that takes a positive integer n, and returns an array that contains, in order, all of the numbers from 1 to n. But for multiples of three (evenly divisible by three) print “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
// input
// 16

// Output
// [
//   1, 2, 'Fizz', 4, 'Buzz',
//   'Fizz', 7, 8, 'Fizz', 'Buzz',
//   11, 'Fizz', 13, 14, 'FizzBuzz',
//   16
// ]




// Write a function that takes two words as arguments and returns true if they are anagrams (contain the exact same letters) and false otherwise.


// Test Cases
// 'superintended', 'unpredestined'	true
// 'pictorialness', 'documentarily'	false


// function every(arr, predicate) {
//     let arr = [];
//     const number = arr[i];
//     arr[i] = arr[i + 1];
//     for(let i = 0; i < arr.length; i++) {
//         arr.length = arr.length - 1;
//     }
// }

function map(arr, callback) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const transformed = callback(item);
    mapped.push(transformed);
  }
  return mapped;
}

console.log(map([1, 6, 5], n => n ** 2));


function filter(arr, predicate) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const shouldBeIncluded = predicate(item);
    shouldBeIncluded && filtered.push(item);
  }
  return filtered;
}

console.log(filter([1, 2, 3, 4], (n) => n % 2 === 0));


function every(arr, fun) {
  let allItemsValid = true;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!fun(item)) {
      allItemsValid = false;
      break;
    }
  }
  return allItemsValid;
}

console.log(every([1, 2, 3, 4], (n) => n % 2 === 0));
console.log(every([2, 4, 6, 8], (n) => n % 2 === 0));


function some(arr, fn) {
  let hasMatchingItem = false;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (fn(item)) {
      hasMatchingItem = true;
      break;
    }
  }
  return hasMatchingItem;
}

console.log(some([1, 2, 3, 4], (n) => n % 2 === 0));
console.log(some([1, 3, 5, 9], (n) => n % 2 === 0));


