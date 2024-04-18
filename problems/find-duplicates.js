/***********************************************************************
**PROBLEM 1: findDuplicatesIterative (1 point)**
Write a function `findDuplicatesIterative`. The function should take an
inputArray (array) and return an array including all items from the inputArray
that appear more than once. However, the returned array must NOT have any
duplicates within it.

For example:

findDuplicatesIterative([ 5, 8, 8, 2, 3 ]);
// [ 8 ]
findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]);
// [ 8, 3 ] (only one 8; order of elements does not matter)
findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]);
// [ 'word', 'a' ] (order of elements does not matter)

A successful solution will pass the first mocha test.

**PROBLEM 2: findDuplicatesRecursive (1 point)**
Write a function `findDuplicatesRecursive`. The function should have the same
output as the first function, but MUST use recursion WITH a default parameter
to find the duplicates.

A successful solution will pass the second mocha test.

**PROBLEM 3: findDuplicatesNoDefault (1 point)**
Write a function `findDuplicatesNoDefault`. The function should have the same
output as the first two functions, but MUST use recursion to find the duplicates.
In addition, you MAY NOT use any default parameters in your solution. You should
only use a single parameter, the inputArray.

A successful solution will pass the third mocha test.

**PROBLEM 4: findDuplicatesChallenge (1 point)**
Write a function `findDuplicatesChallenge`. This function must use recursion,
similar to the second and third function. To pass the fourth mocha test, the
solution code must meet the following constraints:

- There must be NO loop within the function
  - You may NOT use FOR or WHILE loops
- There must be NO array looping methods
  - You may NOT use .map, .forEach, .filter, .find, .sort, or .includes

***********************************************************************/

/* PROBLEM 1. findDuplicatesIterative: Must solve with iteration, not recursion */

// function findDuplicatesIterative(array) {
//   let arr = []
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j] && !arr.includes(array[j])) arr.push(array[j])
//     }
//   }
//   // console.log(arr)
// return arr
// }
// findDuplicatesIterative([ 5, 8, 8, 2, 3 ]);
// // [ 8 ]
// findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]);
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]);
// // [ 'word', 'a' ] (order of elements does not matter)



/* PROBLEM 2. findDuplicatesRecursive: Must solve with recursion */

// function findDuplicatesRecursive(array, i = 0, seen = new Map(), duplicates = []) {
//   // console.log(i)
//   if(i === array.length) {
//     return duplicates;
//   }
//   const el = array[i];
//   if(seen.has(el)) {
//   if(!seen.get(el)) {
//     seen.set(el, true);
//     duplicates.push(el);
//     }
//   } else {
//     seen.set(el, false);
//   }i++
//   return findDuplicatesRecursive(array, i, seen, duplicates);
// }

// console.log(findDuplicatesRecursive([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesRecursive([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

/* PROBLEM 3. findDuplicatesNoDefault: Must use recursion with no default parameters */


// function findDuplicatesNoDefault(array){
//   let arr = []
//   let shift = array.shift()
//   // if((!arr.includes(shift)) && (array.includes(shift))) arr.push(shift)
//   for(let el of array){
//     if(el === shift && !arr.includes(shift)) arr.push(shift)
//   }
//   if(array.length === 0) return arr
//   return [arr + findDuplicatesNoDefault(array)]
// }

function findDuplicatesNoDefault(array) {
  // base case: return an empty array. This works if there are no numbers
  // or we've reached the end of the array
  if (array.length === 0) return []

  // It's easiest for me to remove the first element
  // the recursive step that uses less memory is to slice to return
  // elements after the first index
  let firstEl = array[0]
  let rest = array.slice(1)

  // to prevent writing out a for loop, filter will loop and return an array
  // I want the elements in the rest array to give me an array that matches
  // the firstEl
  let duplicates = rest.filter(el => el === firstEl)

  // If the filter returns an array with numbers...
  if (duplicates.length > 0){
    /*
      ==== Note ====
      This was a weird way for me to get this to work, so I'll explain it.
      Because the duplicates return an array we can copy the contents into
      the array. Of course I want to return the element itself,

      but it was passing the same number inside.

      The workaround was another filter when passing the function again, but this time
      filtering every element that doesn't match the firstEl

      This feels buggy to me, but
    */
    return [firstEl, ...findDuplicatesNoDefault(rest.filter(el => el !== firstEl))]
  } else {
    // otherwise, we repeat the process just with the new array
    return findDuplicatesNoDefault(rest)
  }

}

function findDuplicatesNoDefault(array) {
  if (array.length === 0) return []
  let firstEl = array[0]
  let rest = array.slice(1)
  let duplicates = rest.filter(el => el === firstEl)
  if (duplicates.length > 0){
    return [firstEl, ...findDuplicatesNoDefault(rest.filter(el => el !== firstEl))]
  } else {
    return findDuplicatesNoDefault(rest)
  }

}
console.log(findDuplicatesNoDefault([ 5, 8, 8, 2, 3 ]));
// [ 8 ]
debugger
console.log(findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ]));
// [ 8, 3 ] (only one 8; order of elements does not matter)
console.log(findDuplicatesNoDefault([ 'a', 'word', 'a', 'another', 'word' ]));
// [ 'word', 'a' ] (order of elements does not matter)
/* PROBLEM 4. findDuplicatesChallenge: No for/while loops OR array looping methods */

// Your code here


/*
LOCAL TESTS: Run `node problems/find-duplicates.js` to run this node file,
and debug your code using console.logs.

MOCHA TESTS: Run `mocha` to run the mocha tests.
*/

// console.log(findDuplicatesIterative([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesRecursive([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesRecursive([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesNoDefault([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesNoDefault([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)


// console.log(findDuplicatesChallenge([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesChallenge([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesChallenge([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)
