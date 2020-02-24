// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const rowLength = n * 2 - 1
    // console.log(rowLength)
    let output = ''
    let spaces

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            output += '#'
        } else {
            output += '##'
        }
        const numSpaces = (rowLength - output.length) / 2

        if (numSpaces > 0) {
            spaces = ' '.repeat(numSpaces)
        }  else {
            spaces = ''
        }

        console.log(spaces + output + spaces)
    }
}

function pyramid2(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)

    for (let row = 0; row < n; row++) {
        let level = ''

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }

        console.log(level)
    }
}

pyramid(5)

module.exports = pyramid;
