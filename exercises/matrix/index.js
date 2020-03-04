// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let counter = 1
    let results = []

    for (let i = 1; i < n; i++) {
        results.push([])
    }

    let startRow = 0
    let endRow = 0
    let startColumn = n - 1
    let endColumn = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {

        for (let i = 0; i < endColumn; i++) {
            results[startRow][i] = counter
            counter++
        }

        startRow++

        for (let i = 0; i < endRow; i++) {
            results[i][endColumn] = counter
            counter++
        }

        endRow--

    }

    console.log(results)
    return results
}

module.exports = matrix;
