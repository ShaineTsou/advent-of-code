/* 
Day 1 - Part 2: The Number of Times the sum of measurements Increases
- Given an array of non-negative integers representing depth measurements
- Compare the sums of a three-measurement sliding window
- Return the number of times the sume of measurements in this sliding window increases from the previous sum.

Constraints:
- There is no measurement beofre the first measurement
- There can be duplicates
- Return 0 if the array is empty
- Stop when there aren't enough measurements left to create a new three-measurement sum.
*/

// ---- Puzzle Input ----
const { depths } = require("./getDepthsArray");

// ---- Test Cases ----
const testCase1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]; // 5
const testCase2 = [10, 20, 30, 20, 25, 0, 5]; // 2
const testCase3 = [3]; // 0
const testCase4 = []; // 0

// ---- Solution ----
const numOfSumIncrease = (depths) => {
  // check param
  // It needs at least 4 elements to form 2 three-measurement sliding window for comparison
  if (depths.length < 4) return 0;

  let times = 0;
  let prevSum = depths[0] + depths[1] + depths[2];

  for (let i = 1; i + 2 < depths.length; i++) {
    const currentSum = depths[i] + depths[i + 1] + depths[i + 2];

    if (currentSum > prevSum) {
      times++;
    }

    prevSum = currentSum;
  }

  return times;
};

console.log(numOfSumIncrease(testCase1)); // 5
console.log(numOfSumIncrease(testCase2)); // 2
console.log(numOfSumIncrease(testCase3)); // 0
console.log(numOfSumIncrease(testCase4)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(n) 
Space: O(1)
*/

// Answer:
console.log(numOfSumIncrease(depths));
