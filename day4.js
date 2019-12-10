const splitToDigitsArray = num => `${num}`.split('').map(digit => parseInt(digit))

// Part 1
const isIncreasingAndContainsADouble = arr => {
    let doubleFound = false
    for (let i = 1; i < arr.length; i++){
        if (arr[i - 1] > arr[i]) return false
        if (arr[i - 1] === arr[i]) doubleFound = true
    }
    return doubleFound
}

// Part 2
const isIncreasingAndContainsADoubleThatIsNotPartOfALargerGroup = arr => {
    let doubleFound = false
    let numberInGroup = 1
    let currentNum = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < currentNum) return false
        if (arr[i] === currentNum) {
            numberInGroup++
            if (i === arr.length - 1 && numberInGroup === 2) doubleFound = true
        } else {
            if (numberInGroup === 2) doubleFound = true
            currentNum = arr[i]
            numberInGroup = 1
        }
    }
    return doubleFound
}


const intsInRange = (low, high) => [...Array(high - low + 1).keys()].map(x => x + low)

const matches = intsInRange(168630, 718098).map(int => splitToDigitsArray(int)).filter(int => isIncreasingAndContainsADoubleThatIsNotPartOfALargerGroup(int))
console.log(matches.length)