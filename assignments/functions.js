// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
let descNigeria = describeCountry("Nigeria", 218, "Abuja");
let descFinland = describeCountry("Finland", 6, "Helsinki");
let descSouthAfrica = describeCountry("South Africa", 18, "Johanesburge");

console.log(descNigeria);
console.log(descFinland);
console.log(descSouthAfrica);
