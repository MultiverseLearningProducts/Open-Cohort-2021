// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)


//Create an object to store char count. If any char has more than 1 & not even amount, it is not a palindrome.


function palinPerm(str) {
    let hash = {}

    for(let i = 0; i < str.length; i++) {
        let c = str[i].toLowerCase()
        if(hash[c]) {
            hash[c]++
        } else if(c !== ' '){
            hash[c] = 1
        }
    }

    for(let char in hash) {
        if(hash[char] % 2 !== 0 && hash[char] !== 1){
            console.log('FALSE',hash[char], hash)
            return false
        }
    }
    console.log('TRUE',hash)
    return true
}


palinPerm('Tact Coaaaaa')