// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reduce((reversed, character) => character + reversed, '')

    if (str === reversed) {
        return true
    } else {
        return false
    }
}

function palindrome2(str) {
    const reversed = str.split('').reverse().join('')

    return str === reversed
}

function everyPalindrome(str) {
    const arr = str.split('')

    return arr.every((character, index) => {
        const opposite = arr[arr.length - 1 - index]
        return character === opposite
    })
}

module.exports = palindrome;


