import fs from "fs";

for (let i = 1; i <= 6970; i++) {
  try {
    const data = fs.readFileSync(`./BRO_metadata/${i}`, "utf8");

    if (!data) {
      console.error(`File ${i} is empty`);
      continue;
    }

    const jsonData = JSON.parse(data);

    jsonData.animation_url = "";
    jsonData.image = `https://brotoken-dev.s3.amazonaws.com/images/${jsonData.id}.png`;
    jsonData.nftId = jsonData.id;

    const jsonString = JSON.stringify(jsonData);

    fs.writeFileSync(`./BRO_metadata/${i}`, jsonString);
  } catch (error) {
    console.error(`Error processing file ${i}: ${error}`);
  }
}
