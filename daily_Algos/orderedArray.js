//Prompt:
//sort array from least to greatest
//Optimal solution should be O(1) space and O(n) time

// https://replit.com/@LindaEng1/two-pointer-method#index.js

//[7,5,1,3,4] -> [1,3,4,5,7]
// O(1) space O(n) time 
// two pointer strategy

function sort(arr) {
    //two pointers 
    let p1 = 0
    let p2 = arr.length - 1
  
    //while loop 
    while(p1 < arr.length-1) {
      //swap
      if(arr[p1] > arr[p2]) {
        let temp = arr[p1]
        arr[p1] = arr[p2] // [4,5,1,3,4]
        arr[p2] = temp
        p2--
      }
      //reset the pointers
     if(p1 === p2) { //pointers are colliding
        p2 = arr.length - 1
        p1++
     } 
  
      //decrement p2
      p2--
    }
  
    return arr
  }
  
  sort([7, 5, 1, 3, 4])
  
  // p1         p2
  //[7, 5, 1, 3, 4]
  //arr[p1] > arr[p2] -> swap values
  
  // p1.     p2
  //[4, 5, 1, 3, 7]
  
  // p1.   p2
  //[3, 5, 1, 4, 7]
  
  // p1.p2
  //[1, 5, 3, 4, 7]
  
  // p12
  //[1, 5, 3, 4, 7]
  
  //reset p2 to the end of the array
  //increment p1 by 1
  
  //   p1        p2
  //[1, 5, 3, 4, 7]