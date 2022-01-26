// Bacteria Time
// Define a function, bacteriaTime, that accepts two arguments:

// currentNum (number) - number of starting bacteria
// targetNum (number) - desired number of bacteria
// Assuming that the number of bacteria doubles every 20 minutes, bacteriaTime should return the number of minutes required for the number of bacteria to grow from currentNum to a number equal to or larger than targetNum.

// You can assume that currentNum will be a positive integer. If targetNum is smaller than currentNum, return the string 'targetNum must be larger than currentNum'.

// bacteriaTime(1, 8); // => 60

const bacteriaTime = (currentNum, targetNum) => {
  if(targetNum < currentNum) {
    return 'targetNum must be larger than currentNum'
  }
  let counter = 0
  while(currentNum < targetNum) {
    currentNum = currentNum * 2
    counter++
  }
  return counter * 20
}
