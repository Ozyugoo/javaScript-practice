// Looping Arrays, Breaking and Continuing
// Let's bring back the populations array from a previous assignment.

// Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

//solution

const populations = [218, 1441, 6, 10];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  function percentageOfWorld1(population) {
    return percentages2.push((population / 7900) * 100);
  }

  percentageOfWorld1(populations[i]);
}
console.log(percentages2);
