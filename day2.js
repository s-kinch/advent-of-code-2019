// https://adventofcode.com/2019/day/2

// An Intcode program is a list of integers separated by commas (like 1,0,0,3,99). 
// To run one, start by looking at the first integer (called position 0). 
// Here, you will find an opcode - either 1, 2, or 99. 
// The opcode indicates what to do; for example, 99 means that the program is finished and should immediately halt. 
// Encountering an unknown opcode means something went wrong.

// Opcode 1 adds together numbers read from two positions and stores the result in a third position. 
// The three integers immediately after the opcode tell you these three positions - 
//     the first two indicate the positions from which you should read the input values, 
//     and the third indicates the position at which the output should be stored.

// Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of adding them. 
// Again, the three integers after the opcode indicate where the inputs and outputs are, not their values.

// Once you're done processing an opcode, move to the next one by stepping forward 4 positions.

const input = [1,9,10,3,2,3,11,0,99,30,40,50]

let process = (input) => { // TODO: change back to const
    const output = [...input]
    let halted = false
    let currentIndex = 0

    while (!halted){
        let newLocation
        switch(output[currentIndex]){
            case 99:
                halted = true
                break
            case 1: 
                const addend1 = output[output[currentIndex + 1]]
                const addend2 = output[output[currentIndex + 2]]
                const sum = addend1 + addend2
                newLocation = output[currentIndex + 3]
                output[newLocation] = sum
                currentIndex += 4
                break
            case 2:
                const multiplicand1 = output[output[currentIndex + 1]]
                const multiplicand2 = output[output[currentIndex + 2]]
                const product = multiplicand1 * multiplicand2
                newLocation = output[currentIndex + 3]
                output[newLocation] = product
                currentIndex += 4
                break
            default: 
                console.log('uh oh')
                break
        }        
    }

    return output
}