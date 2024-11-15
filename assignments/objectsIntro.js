"use strict";

// Introduction to Objects
// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
  country: "Nigeria",
  capital: "Abuja",
  Language: ["Igbo", "Yoruba", "Hausa", "English"],
  population: 218,
  neighbours: ["Chad", "Niger", "Cameroun", "Benin"],
};

// Dot vs. Bracket Notation
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log(
  `${myCountry.country} has ${myCountry.population / 3} million ${
    myCountry.Language[0]
  }-speaking people, ${
    myCountry.neighbours.length
  } neighbouring countries and a capital called ${myCountry.capital}`
);

console.log(myCountry.population + 2);
// myCountry.population += 2;

let decreasePopulation = myCountry.population - 2;
// myCountry["population"] -= 2;
console.log(decreasePopulation);
