// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

// I: string
// O: string w/ spaces replaced w/ '%20' 
// C: optimized
// E: empty string, all spaces

let word = "Mr John Smith   "

//solution 1
function URLify(str){
    if(!str) return str
    if(/^\s*$/.test(str)) return true
    //regex to check for spaces:
    // /^\s*$/.test(str);
    let firstChar = false
    let strArr = str.split('')
    console.log(strArr)
    for(let i = strArr.length - 1; i > 0; i--) {
        if(strArr[i] === ' ' && firstChar) {
            strArr[i] = '%20'
        }
        else if(strArr[i] !== ' ' && !firstChar) {
            firstChar = true
        }
        else if(strArr[i] === ' ' && !firstChar) {
            strArr.pop()
        }
    }
    console.log(strArr.join('').length)
}

URLify(word)