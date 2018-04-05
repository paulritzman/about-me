'use strict';

/*

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

var randomNumQ = prompt('Placeholder text');
console.log('randomNumQ - user answered', randomNumQ);

var stateGuessQ = prompt('Placeholder text');
console.log('randomNumQ - user answered', stateGuessQ);

// Output the final score to the console and notify user of their final score.
console.log('totalScore =', totalScore);
alert('You scored: ' + totalScore + '/5!');

*/

// ***** DO NOT TOUCH ANYTHING ABOVE THIS LINE - IT IS LEGACY CODE *****

var questionArray = [
  'Has Paul competed in over 5 different sports? (Y/N)',
  'Is Paul a "Certified Ethical Hacker" (CEH)? (Y/N)',
  'Are pineapples Paul\'s favorite pizza topping? (Y/N)',
  'Did Paul\'s father serve in the U.S. Navy? (Y/N)',
  'Is Paul\'s birthstone: emerald? (Y/N)',
  'Guess what number Paul\'s thinking of, from 1 to 10 inclusive.',
  'Which states does Paul hope to move to at some point?'];

var responseArray = [
  'Paul has competed in 9 different sports.',
  'Paul got his CEH ceritification in August 2016.',
  'Pineapples are fine on pizza, but not on Paul\'s pizza.',
  'Paul\'s father was in the Air Force.',
  'Paul was born in May.'];

var answerArray = ['Y','Y','N','N','Y','YES','YES','NO','NO','YES'];

var wrongAnswerArray = ['N','N','Y','Y','N','NO','NO','YES','YES','NO'];

var stateAnswers = ['arizona', 'california', 'texas'];

var playerScore = 0;

var userAnswer;

var userName = prompt('Please enter your first name.');

for (var i = 0; i < questionArray.length; i++) {
  if (i < 5) {
    userAnswer = prompt(questionArray[i]).toUpperCase();
    console.log('For question ' + i + ', the user answered: ' + userAnswer);

    if (userAnswer === answerArray[i] || userAnswer === answerArray[i + 5]) {
      alert('Correct! ' + responseArray[i]);
      playerScore++;
    } else if (userAnswer === wrongAnswerArray[i] || userAnswer === wrongAnswerArray[i + 5]) {
      alert('Incorrect. ' + responseArray[i]);
    } else {
      alert('invalid response');
    } // closes main, inner question if-else statement

  } else if (i === 5) {
    var randomNum = Math.floor(Math.random() * 10 + 1);
    var randomGuesses = 4;

    do {
      userAnswer = parseInt(prompt(questionArray[i] + '\nNumber of guesses left: ' + randomGuesses));
      console.log('For question ' + i + ', the user answered: ' + userAnswer);
      console.log('Guesses left = ' + (randomGuesses - 1));

      if (userAnswer === randomNum) {
        alert('Correct! The number was ' + randomNum + '.');
        playerScore++;
        break;
      } else if (userAnswer < randomNum){
        alert('Close, but too low. Try again.');
      } else if (userAnswer > randomNum){
        alert('Close, but too high. Try again.');
      } // closes random number if-else statement

      randomGuesses--;
    } while (userAnswer !== randomNum && randomGuesses > 0);
  } else if (i === 6) {
    var stateGuesses = 6;

    do {
      userAnswer = prompt('Which states does Paul hope to move to at some point?\nNumber of guesses left: ' + stateGuesses).toLowerCase();
      console.log('For question ' + i + ', the user answered: ' + userAnswer);
      console.log('Guesses left = ' + (stateGuesses - 1));

      if (userAnswer === stateAnswers[0] || userAnswer === stateAnswers[1] || userAnswer === stateAnswers[2]) {
        alert('Correct! All possible answer: ' + stateAnswers);
        playerScore++;
        break;
      } else {
        alert('Nope, not that one. Try again.');
      } // closes state if-else statement

      stateGuesses--;
    } while ((userAnswer !== stateAnswers[0] || userAnswer !== stateAnswers[1] || userAnswer !== stateAnswers[2]) && stateGuesses > 0);
  } // closes the "else-if (1 === 6)" block
} // closes for-loop

alert('You got ' + playerScore + ' of ' + questionArray.length + ' questions correct, ' + userName + '!');