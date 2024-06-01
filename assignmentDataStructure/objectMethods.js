//Object Methods
// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// Call the describe method.

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// Solution

"use strict";

const myCountry = {
  country: "Nigeria",
  capital: "Abuja",
  Language: ["Igbo", "Yoruba", "Hausa", "English"],
  population: 218,
  neighbours: ["Chad", "Niger", "Cameroun", "Benin"],
  describe: function () {
    return `${this.country} has ${this.population / 3} million ${
      this.Language[0]
    }-speaking people, ${
      this.neighbours.length
    } neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = true;
    if (this.neighbours) {
      return !this.isIsland;
    } else {
      return this.isIsland;
    }
    // this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
