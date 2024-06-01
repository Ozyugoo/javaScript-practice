// Challenge
// Render this statement dynamically "Jonas is a 46-year old teacher, and he has a driver's license" using a method.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  location: "Portugal",
  twitter: "@jonasschmedtmann",
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    if (this.hasDriversLicense) {
      return `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, and he has a driver's license`;
    } else {
      return `Jonas is a ${this.calcAge()}-year old ${
        this.job
      }, and he has a no driver's license`;
    }
  // return `Jonas is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  }
};

console.log(jonas.getSummary());
