// Specs
// Readme
// My Index Of
// Define a function, myIndexOf, that accepts three arguments:

// source (string)
// searchValue (string)
// startIdx (number, optional)
// If the source contains the searchValue, return the index at which the searchValue starts. If the searchValue appears more than once in the source, return the index from the first occurrence of the searchValue. If the searchValue doesn't exist in the source, return -1.

// If a startIdx is passed into the function, ignore any instances of the searchValue that occur before startIdx. If no startIdx is provided, start searching from the beginning of the source.

// Hint: Javascript's .slice string method may be useful here.

// Do not use the built-in .indexOf string method in your answer. Feel free to use it in all future workshop problems though!

// myIndexOf('hello', 'h'); // => 0
// myIndexOf('hello', 'e'); // => 1
// myIndexOf('hello', 'l'); // => 2
// myIndexOf('hello', 'l'); // => 2
// myIndexOf('hello', 'o'); // => 4

// myIndexOf('twice twice', 'ice'); => 2

// // find the index of the first instance of 'ice' starting at index 5.
// myIndexOf('twice twice', 'ice', 5); => 8

// myIndexOf('happy string', 'sad'); => -1

const myIndexOf = (str, val, sidx = 0) => {
  for(let i = sidx; i < str.length; i++) {
    if(str.slice(i, i + val.length) === val) return i
  }
  return -1
}
