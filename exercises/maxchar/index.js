// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = str.split('')
    let output = {}

    arr.forEach(char => {
        if (Object.keys(output).includes(char)) {
            output[char] += 1
        } else {
            output[char] = 1
        }
    })

    return Object.keys(output).reduce((char1, char2) => {
        return output[char1] > output[char2] ? char1 : char2
    })
}

function maxChar2(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;
