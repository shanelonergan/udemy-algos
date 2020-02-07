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
    let output = true
    const regex = /[^\w]/g

    const stripStr = (str, regex) => {
        return str.replace(regex, '').toLowerCase().split('')
    }

    const charMap = (arr) => {
        let output = {}

        arr.forEach(letter => {
            if (Object.keys(output).includes(letter)) {
                output[letter]++
            } else {
                output[letter] = 1
            }
        })
        return output
    }
    const strArr = stripStr(stringA, regex)
    const charMapA = charMap(strArr)
    const charMapB = charMap(stripStr(stringB, regex))
    console.log(charMapA, charMapB)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        output = false
    } else {
        for (const letter in charMapA) {
            if (charMapA[letter] !== charMapB[letter]) {
                output = false
            }
        }
    }

    return output

}

function anagrams2(str) {
    function buildCharMap() {
        const charMap = {}

        for (let char of str.replace(/[^\w]/g, '')) {
            charMap[char] = charMap[char] + 1 || 1
        }

        return charMap
    }

    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }

    return true
}

module.exports = anagrams;
