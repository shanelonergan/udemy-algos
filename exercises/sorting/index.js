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
                console.log(indexOfMin)
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

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
