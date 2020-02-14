// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let output = ''

//     for (let i = 1; i <= n; i++) {
//         output += '#'
//         const numSpaces = n - output.length
//         // const spaces = ' '.repeat(numSpaces)
//         let spaces = ''
//         for (let i = 1; i <= numSpaces; i++) {
//             spaces += ' '
//         }

//         console.log(output + spaces)
//     }
// }

const steps = (n) => {
    for (let row = 0; row < n; row++) {
        let stair = ''

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#'
            } else {
                stair += ' '
            }
        }

        console.log(stair)
    }
}

module.exports = steps;
