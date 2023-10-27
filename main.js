const myAge = 27;
// My current age, to be used for a conversion to a dog's age 

var earlyYears = 2;
// This variable will help us calculate the conversion for the early years of a dog's life

earlyYears *= 10.5;
// The first 2 years equates to 10.5 years

var laterYears = myAge - 2;
// We will use this number to calculate the later years 

laterYears *= 4;
// Each year after the first two equals 4 dog years

console.log(`early years = ${earlyYears}`);
console.log(`late years = ${laterYears}`);

const myAgeInDogYears = earlyYears + laterYears;
// This calculate my age in dog years

const string = "Anne";
const myName = string.toLowerCase();
// This will store my name in all lowercase in the variable myName

console.log(`My name is ${myName}. I am ${myAge} years old in human years whid is ${myAgeInDogYears} years old in dog years.`);



