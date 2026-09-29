const fs = require("fs");

const file = fs.readFileSync("./day3-input.txt").toString();

module.exports = file.split(/\r?\n/);
