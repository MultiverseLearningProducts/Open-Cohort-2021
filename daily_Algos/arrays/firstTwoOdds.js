// Odd Couple
// Define a function, oddCouple, that accepts an array of numbers as an argument.

// oddCouple should return a new array with the first two odd numbers from the original array:

// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
// If fewer than two odd numbers exist in the original array, return an array with only the one odd number, or an empty array if there are no odd numbers:

// oddCouple([10, 15, 20]); // => [15]
// oddCouple(2, 4, 6, 8); // => []

const oddCouple = (arr) => {
  let counter = 0
  let p = 0
  while(p < arr.length || counter < 2) {
    if(arr[p] % 2 === 0) arr.splice(p, 1)
    else{
      p++
      counter++
    }
  }
  return arr.splice(0,2)
}
