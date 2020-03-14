// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let output = []

    for (let i = 0; i <= n; i++) {
        if (i < 2) {
            output.push(i)
        } else {
            const last1 = output[i - 1]
            const last2 = output[i - 2]
            console.log(last1, last2)

            const fibNum = last1 + last2
            output.push(fibNum)
        }
    }

    return output[n]
}

module.exports = fib;
