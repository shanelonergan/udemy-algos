// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let negative = false

    if (n < 0) {
        negative = true
    }

    const stringInt = n.toString()
    const reverseArr = stringInt.split('').reverse('')
    const reverseString = reverseArr.join('')
    let reverseInteger = parseInt(reverseString)

    if (negative) {
        reverseInteger *= -1
    }

    return reverseInteger
}

module.exports = reverseInt;
