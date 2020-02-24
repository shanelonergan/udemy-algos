// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u']
    const strArr = str.toLowerCase().split('')
    let counter = 0

    strArr.forEach(letter => {
        if (vowelArr.includes(letter)) {
            counter += 1
        }
    });

    return counter
}

function vowels2(str) {
    let count = 0
    const checker = 'aeiou'

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (checker.includes(letter)) {
            count ++
        }
    }

    return count
}

function vowels3(str) {
    const matches = str.match(/[aeiou]/gi)

   return  matches ? matches.length : 0
}

module.exports = vowels;
