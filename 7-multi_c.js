const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  let result = "";
  while (i < x) {
    result += "C is fun\n";
    i++;
  }
  console.log(result.trim());
}
