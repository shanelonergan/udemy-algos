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

module.exports = vowels;
