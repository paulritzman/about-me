'use strict';

// Creates an array of questions that the user will be prompted to answer
var questionArray = [
  'Has Paul competed in over 5 different sports? (Y/N)',
  'Is Paul a "Certified Ethical Hacker" (CEH)? (Y/N)',
  'Are pineapples Paul\'s favorite pizza topping? (Y/N)',
  'Did Paul\'s father serve in the U.S. Navy? (Y/N)',
  'Is Paul\'s birthstone: emerald? (Y/N)',
  'Guess what number Paul\'s thinking of, from 1 to 10 inclusive.',
  'Which states would Paul like to move to at some point?'];

// Creates an array to hold the responses for the first 5 questions
var responseArray = [
  'Paul has competed in 9 different sports.',
  'Paul got his CEH ceritification in August 2016.',
  'Pineapples are fine on pizza, but not on Paul\'s pizza.',
  'Paul\'s father was in the Air Force.',
  'Paul was born in May.'];

// Creates an array to hold the answers to the first 5 questions
// Allows for the user to answer with either the word or just the first letter (YES vs Y, NO vs N)
var answerArray = [['Y','Y','N','N','Y'], ['YES','YES','NO','NO','YES']];

// Creates an array to hold the inverse of the correct answers to the first 5 questions
// Allows for the user to answer with either the word or just the first letter (YES vs Y, NO vs N)
var wrongAnswerArray = [['N','N','Y','Y','N'], ['NO','NO','YES','YES','NO']];

// Creates an array to hold the states that Paul would like to move to - for question #7
var stateAnswers = ['arizona', 'california', 'texas'];

// Declares playerScore, which will be used to track the number of correct guesses the user makes
// Initially assigned the value of zero (0), in the event the user guesses no answers correctly
var playerScore = 0;

// Declares userAnswer, which will be used to hold the user's input to the questions
var userAnswer;

// Prompts the user to input their name, and assigns it to userName
var userName = prompt('Please enter your first name.');

// Notifies the user the Guessing Game is about to begin
alert('Let\'s start the Guessing Game!');

// Calls each function to run the game
// Corresponding indexes passed as arguments for askQuestion6 and askQuestion7
askQuestion1_5();
askQuestion6(5);
askQuestion7(6);

// Displays the user's score compared to the total number of questions
alert('You got ' + playerScore + ' of ' + questionArray.length + ' questions correct, ' + userName + '!');

// Declares function to ask questions #1 - 5
function askQuestion1_5 () {
  //Loops through questions #1 - 5
  for (var i = 0; i < 5; i++) {
    userAnswer = prompt(questionArray[i]).toUpperCase();
    console.log('For question ' + i + ', the user answered: ' + userAnswer);

    /* Verifies user's guess against the values stored in answerArray and wrongAnswerArray
      * Displays the corresponding response from responseArray
      *
      * answerArray and wrongAnswerArray store all accepted answers in multidimensional arrays, allowing
      * the user to answer with either the whole word ('YES' or 'NO') or just the first letter ('Y' or 'N')
      */
    if (userAnswer === answerArray[0][i] || userAnswer === answerArray[1][i]) {
      alert('Correct! ' + responseArray[i]);
      playerScore++;
    } else if (userAnswer === wrongAnswerArray[0][i] || userAnswer === wrongAnswerArray[1][i]) {
      alert('Incorrect. ' + responseArray[i]);
    } else {
      alert('Please only answer yes (Y) or no (N).');
    }
  }
}

// Declares function to ask questions #6
function askQuestion6 (i) {
  var randomNum = Math.floor(Math.random() * 10 + 1); // Generates a random number from 1 to 10 (inclusive)
  var randomGuesses = 4; // Sets the total number of guesses the user is allowed to 4

  // Writes the random number to the document, so the user can see the correct number at the end of the game
  var writeRandom = document.getElementById('random-result');
  writeRandom.textContent = 'The number was: ' + randomNum;

  do { // Loops through question #6, tracking the number of guesses the user has left
    userAnswer = parseInt(prompt(questionArray[i] + '\nNumber of guesses left: ' + randomGuesses));
    console.log('For question ' + i + ', the user answered: ' + userAnswer);
    console.log('Guesses left = ' + (randomGuesses - 1));

    if (userAnswer === randomNum) {
      alert('Correct! The number was ' + randomNum + '.');
      playerScore++; // Increments the user's score
      break; // Breaks out of the loop if the user guesses correctly
    } else if (userAnswer < randomNum){
      alert('Close, but too low. Try again.');
    } else if (userAnswer > randomNum){
      alert('Close, but too high. Try again.');
    }

    randomGuesses--; // Decrements the number of guesses the user has left
  } while (userAnswer !== randomNum && randomGuesses > 0);
  // Above line checks to see if the user guessed incorrectly and if they have guesses left
}

// Declares function to ask questions #7
function askQuestion7(i) {
  var stateGuesses = 6; // Sets the total number of guesses the user is allowed to 6

  do { // Loops through question #7, tracking the number of guesses the user has left
    userAnswer = prompt('Which states does Paul hope to move to at some point?\nNumber of guesses left: ' + stateGuesses).toLowerCase();
    console.log('For question ' + i + ', the user answered: ' + userAnswer);
    console.log('Guesses left = ' + (stateGuesses - 1));

    if (stateAnswers.includes(userAnswer)) {
      alert('Correct! All possible answers: ' + stateAnswers);
      playerScore++; // Increments the user's score
      break; // Breaks out of the loop if the user guesses correctly
    } else {
      alert('Nope, not that one. Try again.');
    }

    stateGuesses--; // Decrements the number of guesses the user has left

    // Notifies the user of all possible correct answers when they have no guesses left
    if (stateGuesses === 0) {
      alert('Sorry, those weren\'t correct. The three states Paul would like to move to are: ' + stateAnswers);
    }
  } while (!stateAnswers.includes(userAnswer) && stateGuesses > 0);
  // Above line checks to see if the user's guess does not match any of the possible correct answers
}