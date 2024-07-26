"use strict";
// Coding Challenge

/*
Given an array of forecasted maximum temperatures, the  thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-pleblems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Solution

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];
let count = 0;

for (let i = 0; i < arr1.length; i++) {
  count++;
  console.log(`... ${arr1[i]}C in ${count} days`);
}

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    count++;
    console.log(`... ${arr[i]}C in ${count} days`);
  }
};

printForecast(arr2)