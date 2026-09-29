/* 
Day 3 - Part 2: What is the life support rating of the submarine?
- Given a diagnostic report of binary numbers in string, return the life support rating
- Life support rating is the product of the oxygen generator rating in decimal and the CO2 scrubber rating in decimal

Constraints:
- The number of digits of a binary number is unknown
- Return 0 if it's an empty report
*/

// ---- Puzzle Input ----
const report = require("./getReportArray");

// ---- Test Cases ----
const testCase1 = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
]; // 230

// ---- Solution ----
const getRating = (report, typeOfRating) => {
  if (!report.length) return 0;

  let numOfDigits = report[0].length;
  let pos = 0;

  while (report.length > 1 && pos < numOfDigits) {
    const bitCount = [0, 0];

    for (let binary of report) {
      if (binary[pos] === "0") {
        bitCount[0]++;
      } else {
        bitCount[1]++;
      }
    }

    let filter = "";

    if (typeOfRating === "oxygen") {
      filter = bitCount[1] >= bitCount[0] ? "1" : "0";
    } else if (typeOfRating === "co2") {
      filter = bitCount[0] <= bitCount[1] ? "0" : "1";
    }

    report = report.filter((binary) => binary[pos] === filter);
    pos++;
  }

  return parseInt(report[0], 2);
};

const getLifeSupportRating = (report) => {
  if (!report.length) return 0;

  return getRating(report, "oxygen") * getRating(report, "co2");
};

console.log(getLifeSupportRating(testCase1)); // 230

// Answer:
console.log(getLifeSupportRating(report));
