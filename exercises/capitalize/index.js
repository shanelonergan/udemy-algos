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

    const capitalSentance = output.join(' ')

    return capitalSentance
}

function capitalize2(str) {
    let result = str[0].toUpperCase()

    for(let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
}

module.exports = capitalize;
