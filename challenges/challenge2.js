// let BMI = mass / (height ** 2);
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markMass1 = 95;
let johnMass1 = 85;
let markHeight1 = 1.88;
let johnHeight1 = 1.76;

let markBMI = markMass / markHeight ** 2;
let markBmi = markMass1 / (markHeight1 * markHeight1);
let johnBmi = johnMass1 / johnHeight1 ** 2;
let johnBMI = johnMass / (johnHeight * johnHeight);
let markHigherBMI = markBMI > johnBMI;
let markHigherBMI1 = markBmi > johnBmi;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}
