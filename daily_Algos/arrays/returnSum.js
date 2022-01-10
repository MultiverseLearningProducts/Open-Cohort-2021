//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Use the two pointer method!

function deleteDupes(arr) {
  let p1 = 0
  let p2 = 1
  let counter = 0

  while(p2 < arr.length) {
    if(arr[p2] !== arr[p1]) {
      p1++
      arr[p1] = arr[p2]
      counter++
    }
    p2++
  }
  return arr.slice(0,counter+1)
}