const inputs = [100, 200, 300]

const fuel = (mass) => {
	// divide by 3
	// round down
	// subtract 2

	return Math.floor(mass / 3) - 2
}

// Part 1
const calculateTotalFuel = inputs.reduce((accumulator, currentValue) => fuel(currentValue) + accumulator, 0)


// Part 2
const fuelRecursive = (mass) => {
    const current = fuel(mass)
    return current <= 0 ? 0 : current + fuelRecursive3(current)
}

const calculateTotalFuelRecursive = inputs.reduce((accumulator, currentValue) => fuelRecursive(currentValue) + accumulator, 0)