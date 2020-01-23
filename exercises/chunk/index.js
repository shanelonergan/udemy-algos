// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    let output = []
    let counter = 0

    for (let element of array) {

        if (counter >= array.length) {
            break
        }

        const chunk = array.slice(counter, counter + size)

        output.push(chunk)
        counter += size
    }

    return output
}

function chunk2(array, size) {
    const output = []
    let index = 0

    while (index < array.length) {
        output.push(array.slice(index, index + size))
        index += size
    }

    return output
}

function chunk3(array, size) {
    const chunked = []

    for (let element of array) {
        const last = chunked[chunked.length - 1]

        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }

    return chunked
}

module.exports = chunk;
