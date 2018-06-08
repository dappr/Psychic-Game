
// Create an array for the computer guesses
var randomletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for wins, losses, and guesses
var guessletters = [];
var guesssofar= ""
var guessesleft = 9;
var wins = 0
var losses = 0 

//Functions
document.onkeyup = function(event) {

    var userguess = event.key; 
    console.log("userguess" + userguess)
};

compguess = randomletters [Math.floor(Math.random() * randomletters.length)];

console.log("compguess" + compguess)


// For loop for computer choices 

for (var i = 0; i < randomletters.length; i++); {
 
    // Beginning of logic
    // If condition to save user guesses
    if (event.key == randomletters[i] ){
       
        guesssofar += userguess + ",";

        // If condition when user guesses correctly
        if (userguess == compguess) {
            wins++;

         // If condition for guesses left
            guessesleft = 9;

            compguess = randomletters [Math.floor(Math.random() * randomletters.length)];
            guesssofar = "";
        }

        // Else if condition for when user guesses incorrectly
    else if (userguess !== compguess) {
        guessesleft--;
    
    
            // When user runs out of guesse they will get a loss.
            if (guessesleft == 0 ) {

                losses++;
                guessesleft = 9;
                compguess = randomletters [Math.floor(Math.random() * randomletters.length)];
                guesssofar = "";

    
                document.querySelector("psychic-game").innerHTML = html;
            }    }
    }
}














// create a loop for random letters
// LOGIC that needs to be addes
// after if / if else will follow (if user chooses this letter comp chooses diff)
// if user guess = comp guess increments wins
// if user guess does not equal comp guess decrements guesses left until # of guess is 0 
// once # of guesses is 0 increment losses 
// refer to Rock Paper Scissor activity





