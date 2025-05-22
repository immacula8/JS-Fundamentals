const args = process.argv.slice(2)
// Slicing the process.argv removs the first two values in the array automatically and trims it to only the arguments you need
// You can then access them with just args[0] and args[1]

console.log(args[0] + " is " + args[1])
