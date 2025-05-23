const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let row = "X".repeat(size); // One row like "XXXX"
  let i = 0;

  while (i < size) {
    console.log(row); // Print the same row
    i++;
  }
}
