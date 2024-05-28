// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = population => (population / 7900) * 100;

let percentNigeria = percentageOfWorld3(218);
let percentChina = percentageOfWorld3(1441);
let percentFinland = percentageOfWorld3(6);

console.log(percentChina, percentFinland, percentNigeria);