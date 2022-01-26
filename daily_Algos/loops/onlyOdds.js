// Only Odds
// Define a function, onlyOdds, that accepts a number as an argument. onlyOdds should should return the sum of all the odd numbers between 1 and the given number.

// If onlyOdds receives an argument less than 1, it should return 0.

// onlyOdds(6); // => 9 (5 + 3 + 1)
const onlyOdds = (num) => {
  if(num < 1) return 0
  let currentOdd = 1
  let sum = 0
  while(currentOdd < num) {
    sum = sum + currentOdd
    currentOdd = currentOdd + 2
  }
  return sum
}
