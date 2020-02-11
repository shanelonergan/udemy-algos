// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    arr = str.split(' ')
    let output = []

    for(let word of arr) {
        let capitalWord = word[0].toUpperCase() + word.slice(1)

        output.push(capitalWord)
    }

    return output.join(' ')
}

module.exports = capitalize;
