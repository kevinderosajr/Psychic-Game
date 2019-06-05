let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesChosen = [];

document.onkeyup = function(event) {

    let playerGuess = event.key;
    let computerGuess = letters[Math.floor(Math.random() * letters.length)];
    let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

   if (options.indexOf(playerGuess) > -1) {

       if (playerGuess === computerGuess) {
           wins++;
           guessesLeft = 9;
           guessesChosen = [];
       }

       if (playerGuess != computerGuess) {
        guessesLeft --;
           guessesChosen.push(playerGuess);
       }

       if (guessesLeft === 0) {

        guessesLeft = 9;
       losses ++;
       guessesChosen = [];
  
   }

   let html = 
   "<h1> The Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + guessesLeft + "</p>" +
   "<p>Your Guesses so far: " + guessesChosen.join(", ") + "</p>";
   document.querySelector("#game").innerHTML = html;

   }
};