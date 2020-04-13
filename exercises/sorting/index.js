// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
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

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
