// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

//Hint: Two pointer method!

function moveZeros(arr) {
    let p1 = 0
    let p2 = 1
  
    while(p2 < arr.length) {
      if(arr[p1] === 0 && arr[p2] !== 0) {
        let temp = arr[p1]
        arr[p1] = arr[p2]
        arr[p2] = temp
        p1++
      }
      if(arr[p1] !== 0) p1++
      p2++
    }
    return arr
  }
  
  moveZeros([1,0,0,3,12])