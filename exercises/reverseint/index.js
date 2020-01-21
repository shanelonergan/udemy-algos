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

    const sign = Math.sign(n)
    const stringInt = n.toString()
    const reverseArr = stringInt.split('').reverse('')
    const reverseString = reverseArr.join('')
    let reverseInteger = parseInt(reverseString)

    return reverseInteger * sign
}

function reverseInt2() {


}

module.exports = reverseInt;
