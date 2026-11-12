//guessing game
// Guess a number from 1 to 100
// Generate a random number 1 to 100
// If the user guesses the number, display a message "Congratulations! You guessed the number."
// If the user does not guess the number, display a message "Sorry, you did not guess the number. The correct number was [number]."
// total number of attempts will be 5 after every attempts it will say too high or too low  in the prompt and ask the user to guess again until the user guesses the number or runs out of attempts. and will say number of attempts left after every guess.


var attempts = 5;
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessedCorrectly = false;

for (var i = 0; i < attempts; i++) {

    var userGuess = parseInt(
        prompt(
            "Guess a number between 1 and 100\nAttempts left: " + (attempts - i)
        )
    );

    if (userGuess === randomNumber) {
        document.write("Congratulations! You guessed the number.");
        guessedCorrectly = true;
        break;
    }
    else if (userGuess > randomNumber) {
        alert("Too High! Attempts left: " + (attempts - i - 1));
    }
    else {
        alert("Too Low! Attempts left: " + (attempts - i - 1));
    }
}

if (!guessedCorrectly) {
    document.write(
        "Sorry, you did not guess the number. The correct number was " +
        randomNumber + "."
    );
}
