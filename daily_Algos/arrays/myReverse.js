// My Reverse
// Define a function myReverse that accepts an array.

// myReverse should return a new array with the elements in reverse order.

// myReverse([1, 2, 3]); // => [3, 2, 1]
// Do not use the built-in .reverse method for this problem. You can use it on all future problems though!

const myReverse = (arr) => {
  let p1 = 0
  let p2 = arr.length - 1
  while(p1 < p2) {
    let temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
    p1++
    p2--
  }
  return arr
}
