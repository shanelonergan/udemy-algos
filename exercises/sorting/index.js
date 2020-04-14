// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            const firstElement = arr[j]
            const secondElement = arr[j + 1]

            if(firstElement > secondElement) {
                arr[j] = secondElement
                arr[j + 1] = firstElement
            }
        }
    }

    return arr
}

function selectionSort(arr) {
    let indexOfMin = 0

    for (let i = 0; i < arr.length; i++) {
        indexOfMin = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }

        if (indexOfMin !== i) {
            const lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }

    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {
    const results = []

    while(left.length && right.length) {
        left[0] < right[0]
        ? results.push(left.shift())
        : results.push(right.shift())
    }
    if(left.length) {
        left.forEach(num => results.push(left.shift()))
    } else if (right.length) {
        right.forEach(num => results.push(right.shift()))
    }
    return results
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
