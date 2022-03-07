// Prompt: Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


let testString = 'abcad'
let testString2 = 'abcde'

//O(n) - two pointer method
function isUnique(str) {
    let p1 = 0
    let p2 = 1
    while(p1 < str.length - 1) {
        console.log('str[p1] = ', str[p1], 'str[p2] =', str[p2])
        if(p2 === str.length) {
            p2 = p1 + 2
            p1++
        }
        else {
            if(str[p1] === str[p2]){
                console.log(false)
                return false
            } 
            p2++
        }
    }
    console.log(true)
    return true
}

//using Set
function isUniqueSet(str) {
    let set = new Set()
    for(let i = 0; i < str.length; i++) {
        set.add(str[i])
    }
    (set.size === str.length) ? true : false
}

isUniqueSet(testString2)