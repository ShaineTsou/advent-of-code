const fs = require("fs");

const file = fs.readFileSync("./day2-input.txt").toString();
const lines = file.split(/\r?\n/);

module.exports = lines.map((line) => {
  let directionPair = line.split(" ");
  directionPair[1] = parseInt(directionPair[1]);

  return directionPair;
});
