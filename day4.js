const splitToDigitsArray = num => `${num}`.split('').map(digit => parseInt(digit))

const isIncreasingAndContainsADouble = arr => {
    let doubleFound = false
    for (let i = 1; i < arr.length; i++){
        if (arr[i - 1] > arr[i]) return false
        if (arr[i - 1] === arr[i]) doubleFound = true
    }
    return doubleFound
}

const intsInRange = (low, high) => [...Array(high - low + 1).keys()].map(x => x + low)

const matches = intsInRange(168630, 718098).map(int => splitToDigitsArray(int)).filter(int => isIncreasingAndContainsADouble(int))
console.log(matches.length)