// Functions Calling Other Functions﻿
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = (country, population) => {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )}% of the world`;
};

let populationNigeria = describePopulation("Nigeria", 218);
let populationFinland = describePopulation("Finland", 6);
let populationChina = describePopulation("China", 1441);

console.log(populationChina, populationFinland, populationNigeria);
