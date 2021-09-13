// Information of Puzzle Day2 - Part 2: https://adventofcode.com/2015/day/2//part2

// Given a list of the dimensions (length(l), width(w), and hegiht(h)) of each present. (All numbers are in feets)
// The required ribbon for each present is: 2 * Math.min(l+w, w+h, l+h) + l*w*h
// How many total square feet of ribbon should they order?
const fs = require("fs");

const getTotalRibbon = function () {
  fs.readFile("day2-input.txt", (err, data) => {
    let total = 0;
    const file = data.toString();
    const lines = file.split(/\r?\n/);

    for (let line of lines) {
      dimensions = line.split("x");
      const l = parseInt(dimensions[0], 10);
      const w = parseInt(dimensions[1], 10);
      const h = parseInt(dimensions[2], 10);

      total += 2 * Math.min(l + w, w + h, l + h) + l * w * h;
    }

    console.log("Total: ", total);
  });
};

getTotalRibbon();
