// Crazy Caps
// Define a function, crazyCaps, that accepts a string as an argument. crazyCaps should return a string in which every other character is capitalized. The first letter should be lower-cased.

// crazyCaps('this is cool'); // =>tHiS Is cOoL
const crazyCaps = (str) => {
  let strArr = str.split('')
  for(let i = 0; i < strArr.length; i++) {
    if(i % 2 !== 0) {
      strArr[i] = strArr[i].toUpperCase()
    }
  }
  return strArr.join('')
}
