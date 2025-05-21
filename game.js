const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 1 and 100.");

function askGuess() {
  rl.question('Enter your guess: ', (answer) => {
    attempts++;
    const guess = Number(answer);

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      askGuess();
    } else if (guess < numberToGuess) {
      console.log("Too low! Try again.");
      askGuess();
    } else if (guess > numberToGuess) {
      console.log("Too high! Try again.");
      askGuess();
    } else {
      console.log(`Correct! You guessed the number in ${attempts} attempts.`);
      rl.close();
    }
  });
}

askGuess();
