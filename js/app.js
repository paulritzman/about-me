'use strict';

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

alert('Let\'s start the Guessing Game!')

for (var i = 0; i < questionArray.length; i++) {
  if (i === 5) {
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
        alert('Correct! All possible answers: ' + stateAnswers);
        playerScore++;
        break;
      } else {
        alert('Nope, not that one. Try again.');
      } // closes state if-else statement

      stateGuesses--;

      if (stateGuesses === 0) {
        alert('Sorry, those weren\'t correct. The three states Paul would like to move to are: ' + stateAnswers);
      }
    } while ((userAnswer !== stateAnswers[0] || userAnswer !== stateAnswers[1] || userAnswer !== stateAnswers[2]) && stateGuesses > 0);

  } else {
    userAnswer = prompt(questionArray[i]).toUpperCase();
    console.log('For question ' + i + ', the user answered: ' + userAnswer);

    if (userAnswer === answerArray[i] || userAnswer === answerArray[i + 5]) {
      alert('Correct! ' + responseArray[i]);
      playerScore++;
    } else if (userAnswer === wrongAnswerArray[i] || userAnswer === wrongAnswerArray[i + 5]) {
      alert('Incorrect. ' + responseArray[i]);
    } else {
      alert('Please only answer yes (Y) or no (N).');
    } // closes else statement
  } // closes entire if/else statement
} // closes for-loop

alert('You got ' + playerScore + ' of ' + questionArray.length + ' questions correct, ' + userName + '!');