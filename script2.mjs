import fs from "fs";

// Array to hold the objects from each file
let objects = [];

// Read the contents of each file and parse the JSON object
for (let i = 1; i <= 6970; i++) {
  let filename = `./BRO_metadata/${i}`;
  let contents = fs.readFileSync(filename, "utf8");
  let obj = JSON.parse(contents);
  objects.push(obj);
}

// Combine the objects into a single array
let jsonArray = JSON.stringify(objects);

// Write the array to a new file
fs.writeFileSync("combined.json", jsonArray);
