/* 
Day 2 - Part 2: Where am I now with new interpretation of the commands?
- Given a series of directions, return the product of the final horizontal position and the final depth
  - The input has been organized into an array of direction arrays
  - Each inner direction array contains a direction string as the first element and the unit of movement as the second element
- The unit of movement is a positive integer

Instruction:
- The starting horizontal position, depth and aim are all 0
- There are only three types of movements:
  - down x: increase the aim by x units
  - up x: decrease the aim by x units
  - forward x: 
    increase the horizontal position by x units
    increase the depth by the product of the aim and x units

Constraints:
- Return 0 when the series of directions is an empty array
- Theoretically, submarine should not have a negative depth postition, meaning the submarine is hovering over the sea 😱
*/

// ---- Puzzle Input ----
const directions = require("./getDirectionsArray");

// ---- Test Cases ----
const testCase1 = [
  ["forward", 5],
  ["down", 5],
  ["forward", 8],
  ["up", 3],
  ["down", 8],
  ["forward", 2],
]; // 900

const testCase2 = [
  ["down", 10],
  ["forward", 7],
  ["up", 2],
  ["up", 5],
  ["forward", 1],
  ["down", 6],
]; // 584

const testCase3 = []; // 0
const testCase4 = [[]]; // 0

// ---- Solution ----
const productOfFinalPosition = (directions) => {
  if (!directions.length || !directions[0].length) return 0;

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (let directionPair of directions) {
    const direction = directionPair[0];
    const movement = directionPair[1];

    switch (direction) {
      case "forward":
        horizontal += movement;
        depth += aim * movement;
        break;
      case "down":
        aim += movement;
        break;
      case "up":
        aim -= movement;
        break;
      default:
        break;
    }
  }

  return horizontal * depth;
};

console.log(productOfFinalPosition(testCase1)); // 900
console.log(productOfFinalPosition(testCase2)); // 584
console.log(productOfFinalPosition(testCase3)); // 0
console.log(productOfFinalPosition(testCase4)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(n) 
Space: O(1)
*/

// Answer:
console.log(productOfFinalPosition(directions));
