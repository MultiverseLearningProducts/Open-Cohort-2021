// Exponentiate
// Write a function exponentiate that accepts two arguments:

// base (number)
// power (number)
// exponentiate should return the result of raising the base by the power. Assume that power will always be an integer greater than or equal to zero. Don't forget that any number raised to the 0th power is equal to 1!

// Do not use the built-in Math.pow() method or Javascript's built-in exponentiation operator but feel free to use them moving forward!

// exponentiate(2, 2)    // => 4
// exponentiate(3, 4)    // => 81


function exponentiate(base, power) {
  if(power === 0) return 1
  let count = 1
  let sum = base
  while(count < power) {
    sum *= base
    count++
  }
  return sum
}
