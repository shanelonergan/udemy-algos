// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const arr = str.split('')

//     const reverseArr = arr.reverse()

//     const solution = reverseArr.join('')

//     return solution
// }

function reverse2(str) {
    return str
    .split('')
    .reverse()
    .join('')
}

function loopReverse(str) {
    let reversed = ''

    for (let character of str) {
        reversed = character + reversed
    }

    return reversed
}

function reverse(str) {
    const arr = str.split('')

    return arr.reduce((reversed, character) => character + reversed, '')
}

module.exports = reverse;
