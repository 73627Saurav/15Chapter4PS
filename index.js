// Chapter 4 - Practice Set
// Problem 1
let str1 = "Har\""
console.log(str1.length) //4

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
let amount1 = Number.parseInt(str2.slice(15))
console.log(amount1) // 1000
console.log(typeof amount1) // number
let amount2 = str2.slice("Please give Rs ".length)
console.log(amount2) // 1000
console.log(typeof amount2) // string

// Problem 5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // Deepika
// friend is not changed, because string is immutable

let str = "Deepika";
str = str.substring(0,3) + "R" + str.substring(4);
console.log(str);
// substr(startIndex, length): Extracts a specified number of characters from a string, starting at a specified index.