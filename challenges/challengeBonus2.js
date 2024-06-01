// Challenge Bonus
// Render the statement Dynamically 'Jonas has 3 friends, and his best friend is called Micheal'

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedmann",
  age: 46,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  location: "Portugal",
  twitter: "@jonasschmedtmann",
};

// Solution

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);