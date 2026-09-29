// Node.js Docs - fs.readFileSync() (https://nodejs.org/docs/v0.3.1/api/fs.html#fs.readFileSync)
const fs = require("fs");

const getDepthsArray = () => {
  const file = fs.readFileSync("./day1-input.txt").toString();
  const lines = file.split(/\r?\n/);

  return lines.map((line) => parseInt(line));
};

module.exports = {
  depths: getDepthsArray(),
};
