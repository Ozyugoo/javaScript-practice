// The while Loop
// Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// Reflect on what solution you like better for this task: the for loop or the while loop?

//Solution

const populations = [218, 1441, 6, 10];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push((populations[i] / 7900) * 100);
  i++;
  } 
  
console.log(percentages3);
