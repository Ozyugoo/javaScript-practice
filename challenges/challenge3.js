// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Solution

let dolphinsScore = (96 + 108 + 89) / 3;
let dolphinsBonus1 = (97 + 112 + 101) / 3;
let dolphinsBonus2 = (97 + 112 + 101) / 3;

let koalasScore = (88 + 91 + 110) / 3;
let koalasBonus1 = (109 + 95 + 123) / 3;
let koalasBonus2 = (109 + 95 + 106) / 3;


if (dolphinsScore > koalasScore) {
  console.log("Dolphins wins the trophy!");
} else if (dolphinsScore === koalasScore) {
  console.log("We have a tie");
} else {
  console.log("Koalas wins the trophy!");
}


if (dolphinsBonus1 > koalasBonus1 && dolphinsBonus1 > 100) {
  console.log("Dolphins wins the trophy!");
} else if (koalasBonus1 > dolphinsBonus1 && koalasBonus1 > 100) {
  console.log("Koalas wins the trophy!");
} else if (dolphinsBonus1 === koalasBonus1) {
  console.log("We have a tie");
} else {
  console.log('We go again!')
}

if (dolphinsBonus2 > koalasBonus2 && dolphinsBonus2 > 100) {
  console.log("Dolphins wins the trophy!");
} else if (koalasBonus2 > dolphinsBonus2 && koalasBonus2 > 100) {
  console.log("Koalas wins the trophy!");
} else if (dolphinsBonus2 === koalasBonus2 && dolphinsBonus2
   >= 100 && koalasBonus2 >= 100) {
  console.log("We have a tie");
} else {
  console.log('We go again!')
}

