const  firstArgs = process.argv[2]

if (firstArgs === undefined) {
    console.log("No argument")
} else {
    console.log(firstArgs);
}