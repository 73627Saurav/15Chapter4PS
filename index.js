// Chapter 4 - Practice Set
// Problem 1
let str = "Har\""
console.log(str.length) //4

// Problem 2
const sentence = 'The quick brown fox jumps over the lazy dog.'
const word1 = 'fox'
const word2 = 'foxx'
console.log(sentence.includes(word1)) // true
console.log(sentence.includes(word2)) // false
console.log(`The word ${word1} ${sentence.includes(word1) ? 'is' : 'is not'} in the sentence`)
// The word "fox" is in the sentence
console.log(`The word ${word2} ${sentence.includes(word2) ? 'is' : 'is not'} in the sentence`)
// The word "foxx" is not in the sentence

// Problem 3
console.log(word1.toLowerCase()) // fox
console.log(word1.toUpperCase()) // FOX

// Problem 4
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount) // 1000
console.log(typeof amount) // number

// Problem 5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // Deepika
// friend is not changed, because string is immutable