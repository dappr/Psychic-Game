var randomletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessletters = [];
var guesssofar= ""
var guessesleft = 9;
var wins = 0
var losses = 0 

// random letters for compguess full alphabet 

for (var i = 0; i < randomletters.length; i++); {
    
    if (event.key == compguess [i]) {
       
        guesssofar += userguess + ", ";

        if (userguess == compguess) {
            wins++;

            guessesleft = 9;

            compguess = randomletters [Math.floor(Math.random() * randomletters.length)];
            guesssofar = "";
        }

    else if (userguess !== compguess) {
        guessesleft--;
        
    }
    }
}


document.onkeyup = function(event) {

    var userguess = event.key; 
    console.log("userguess" + userguess)
};


var compguess = randomletters [Math.floor(Math.random() * randomletters.length)];

console.log("compguess" + compguess)












// create a loop for random letters
// LOGIC that needs to be addes
// after if / if else will follow (if user chooses this letter comp chooses diff)
// if user guess = comp guess increments wins
// if user guess does not equal comp guess decrements guesses left until # of guess is 0 
// once # of guesses is 0 increment losses 
// refer to Rock Paper Scissor activity





