/* 
Day 3 - Part 1: What is the power consumption of the submarine?
- Given a diagnostic report of binary numbers in string, return the power consumption
- Power consumption is the product of the gamma rate in decimal and the epsilon rate in decimal
  - Each bit in the gamma rate can be determined by finding the most common bit in the corresponding position of all numbers in the diagnostic report
  - Each bit in the epsilon rate can be determined by finding the least common bit in the corresponding position of all numbers in the diagnostic report

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
]; // 198

// ---- Solution ----
const getPowerConsumption = (report) => {
  if (!report.length) return 0;

  let numOfDigits = report[0].length;
  const bitCount = new Array(numOfDigits).fill(0).map((item) => [0, 0]);

  // Count the number of 0's and 1's at each position
  for (let binary of report) {
    for (let i = 0; i < binary.length; i++) {
      const type = binary[i];
      bitCount[i][type]++;
    }
  }

  // Get gamma value
  let gamma = "";

  for (let count of bitCount) {
    if (count[0] > count[1]) {
      gamma += "0";
    } else {
      gamma += "1";
    }
  }

  gamma = parseInt(gamma, 2);
  let epsilon = Math.pow(2, numOfDigits) - 1 - gamma;

  return gamma * epsilon;
};

console.log(getPowerConsumption(testCase1)); // 198

// Answer:
console.log(getPowerConsumption(report));
