/* 
Day 1 - Part 1: The Number of Times a Depth Measurement Increases
- Given an array of non-negative integers representing depth measurements.
- Return the number of times a depth measurement increases from the immediate previous measurement

Constraints:
- There is no measurement beofre the first measurement
- There can be duplicates
- Return 0 if the array is empty
*/

// ---- Puzzle Input ----
const { depths } = require("./getDepthsArray");

// ---- Test Cases ----
const testCase1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]; // 7
const testCase2 = [10, 20, 30, 20, 25, 0, 5]; // 4
const testCase3 = [3]; // 0
const testCase4 = []; // 0

// ---- Solution ----
const numOfDepthIncrease = (depths) => {
  // check param
  if (depths.length < 2) return 0;

  let times = 0;

  for (let i = 1; i < depths.length; i++) {
    const prevDepth = depths[i - 1];
    const currentDepth = depths[i];

    if (currentDepth > prevDepth) {
      times++;
    }
  }

  return times;
};

console.log(numOfDepthIncrease(testCase1)); // 7
console.log(numOfDepthIncrease(testCase2)); // 4
console.log(numOfDepthIncrease(testCase3)); // 0
console.log(numOfDepthIncrease(testCase4)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(n) 
Space: O(1)
*/

// Answer:
console.log(numOfDepthIncrease(depths));
