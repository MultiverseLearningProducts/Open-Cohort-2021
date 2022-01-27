// My Includes
// Define a function, myIncludes, that accepts an array and a searchValue as arguments.

// myIncludes should return true if the searchValue is an element in the array. Otherwise, myIncludes should return false.

// Do not use the built-in .includes array method during this problem. Feel free to use it on any future problem though! Note that strings have an .includes method, too.

// myIncludes([10, 20, 30], 20); // => true
// myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false

const myIncludes = (arr, searchValue) => {
  let p1 = 0
  let p2 = arr.length - 1
  while(p1 < arr.length) {
    if(arr[p1] === searchValue || arr[p2] === searchValue) {
      return true
    } else {
      p1++
      p2--
    }
  }
  return false
}
