// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split('')

    const reverseArr = arr.reverse()

    const solution = reverseArr.join('')

    return solution
}

function reverse2(str) {
    return str
    .split('')
    .reverse()
    .join('')
}

module.exports = reverse;
