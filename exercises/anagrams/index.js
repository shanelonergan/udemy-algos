// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const regex = /[^\w]/g

    const stripStr = (str, regex) => {
        return str.replace(regex, '').toLowerCase()
    }

    const charMap = (str) => {
        let output = {}

        str.forEach(letter => {
            if (Object.keys(output).includes(letter)) {
                output[letter]++
            } else {
                output[letter] = 1
            }
        })
    }

}

module.exports = anagrams;
