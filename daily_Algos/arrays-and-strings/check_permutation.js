// Given two strings,write a method to decide if one is a permutation of the
// other.

// I: 2 strings
// O: boolean
// C: optimize
// E: empty strings, different lengths

let testStr = 'abc'
let testStr2 = 'acb'
let testStr3 = 'aaa'

//Sorting strings then checking 
//TC: O(n Log n)
//SC: O(n)
function checkPerm(str1, str2) {
    const obj1 = {}
    const obj2 = {}
    let strArr1 = str1.split('').sort()
    let strArr2 = str2.split('').sort()
    console.log(strArr1,strArr2)
    for(let i = 0; i < str1.length; i++) {
        if(strArr1[i] !== strArr2[i]) return false
    }
    console.log(true)
    return true
}

//to optimize, use hashtable. Map one string and use the second string to check.
function checkPermOptimized(str1, str2) {
    if(str1.length !== str2.length) return false
    if(!str1 || !str2) return false

    let hash = {}
    //stores char of str1 into hash obj
    for(let i = 0; i < str1.length; i++) {
        let c = str1[i]
        if(hash[c]) {
            hash[c]++
        } else {
            hash[c] = 1
        }
    }
    console.log(hash)
    //if char from str2 matches, remove from hash[c]
    for(let i = 0; i < str2.length; i++) {
        let c = str2[i]
        if(hash[c] && hash[c] !== 0) {
            hash[c]--
        }else {
            console.log(false)
            return false
        }
    }
    
    return true
}


checkPermOptimized(testStr,testStr3)