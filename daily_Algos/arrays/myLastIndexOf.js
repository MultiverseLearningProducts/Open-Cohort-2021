// My Last Index Of
// Define a function, myLastIndexOf, that accepts up to three arguments:

// array
// searchValue
// startIdx (optional)
// myLastIndexOf should return the last index at which searchValue appears in the array.

// myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// If searchValue isn't in the array, myLastIndexOf should return -1.

// myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// If startIdx is defined, myLastIndexOf should start looking for the searchValue at that index, and then move towards the front of the array as it looks for searchValue.

// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
// You cannot use the built-in .lastIndexOf method for this problem, but feel free to use it in the future! Note that strings also have a .lastIndexOf method.

const myLastIndexOf = (array, searchValue, startIdx = array.length - 1) => {
  while(startIdx > 0) {
    if(array[startIdx] === searchValue) return startIdx
    else startIdx--
  }
  return -1
}

