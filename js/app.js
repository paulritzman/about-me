'use strict';

var totalScore = 0; // Declare a totalScore variable to track number of correct responses.

// Prompts the user to answer a question, logging the user's answer and adjusting
// totalScore, if necessary. Correct answer = 'Y' or 'YES'
var sportsQ = prompt('Has Paul competed in over 5 different sports? (Y/N)').toUpperCase();
console.log('sportsQ - user answered:', sportsQ);

if (sportsQ === 'Y' || sportsQ === 'YES') {
  alert('Correct! Paul has actually competed in 9 different sports.');
  totalScore++;
} else if (sportsQ === 'N' || sportsQ === 'NO') {
  alert('Incorrect, Paul has competed in 9 different sports.');
} else {
  alert('Please only answer with Yes or No.');
}

console.log('totalScore =', totalScore); // Output the current score to the console.

// Prompts the user to answer a question, logging the user's answer and adjusting
// totalScore, if necessary. Correct answer = 'Y' or 'YES'
var cehQ = prompt('Is Paul a "Certified Ethical Hacker" (CEH)? (Y/N)').toUpperCase();
console.log('cehQ - user answered:', cehQ);

if (cehQ === 'Y' || cehQ === 'YES') {
  alert('Correct! Paul got his CEH ceritification in August 2016.');
  totalScore++;
} else if (cehQ === 'N' || cehQ === 'NO') {
  alert('Incorrect. Paul got his CEH cerification in August 2016');
} else {
  alert('Please only answer with Yes or No.');
}

console.log('totalScore =', totalScore); // Output the current score to the console.

// Prompts the user to answer a question, logging the user's answer and adjusting
// totalScore, if necessary. Correct answer = 'N' or 'NO'
var pizzaToppingQ = prompt('Are pineapples Paul\'s favorite pizza topping? (Y/N)').toUpperCase();
console.log('pizzaToppingQ - user answered:', pizzaToppingQ);

if (pizzaToppingQ === 'Y' || pizzaToppingQ === 'YES') {
  alert('Incorrect. Pineapples are fine on pizza, but not on Paul\'s pizza.');
} else if (pizzaToppingQ === 'N' || pizzaToppingQ === 'NO') {
  alert('Correct! Pineapples are fine on pizza, but not on Paul\'s pizza.');
  totalScore++;
} else {
  alert('Please only answer with Yes or No.');
}

console.log('totalScore =', totalScore); // Output the current score to the console.

// Prompts the user to answer a question, logging the user's answer and adjusting
// totalScore, if necessary. Correct answer = 'N' or 'NO'
var fatherQ = prompt('Did Paul\'s father serve in the U.S. Navy? (Y/N)').toUpperCase();
console.log('fatherQ - user answered:', fatherQ);

if (fatherQ === 'Y' || fatherQ === 'YES') {
  alert('Incorrect. Paul\'s father was in the Air Force.');
} else if (fatherQ === 'N' || fatherQ === 'NO') {
  alert('Correct! Paul\'s father was in the Air Force.');
  totalScore++;
} else {
  alert('Please only answer with Yes or No.');
}

console.log('totalScore =', totalScore); // Output the current score to the console.

// Prompts the user to answer a question, logging the user's answer and adjusting
// totalScore, if necessary. Correct answer = 'Y' or 'YES'
var emeraldQ = prompt('Is Paul\'s birthstone: emerald? (Y/N)').toUpperCase();
console.log('emeraldQ - user answered:', emeraldQ);

if (emeraldQ === 'Y' || emeraldQ === 'YES') {
  alert('Correct! Paul was born in May.');
  totalScore++;
} else if (emeraldQ === 'N' || emeraldQ === 'NO') {
  alert('Incorrect. Paul was born in May.');
} else {
  alert('Please only answer with Yes or No.');
}

// Output the final score to the console and notify user of their final score.
console.log('totalScore =', totalScore);
alert('You scored: ' + totalScore + '/5!');