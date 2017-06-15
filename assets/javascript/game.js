
var wordbase = ["apple", "orange", "class", "facebook", "programming", "berkeley", "rhodesian", "number", "joyous"]
var wins = 0;

// start game
newGame()

// setting up game
function newGame() {
	var pickedLetters = []
	var wrongLetters = []

	var guessesLeft = 8;

	var answer = wordbase[Math.floor(Math.random() * wordbase.length)];
	console.log(answer)

	var chosenWord = []

	// setting up underscores
	for (var i = 0; i < answer.length; i++) {
		chosenWord.push("_")
	};

	// print underscores for each letter
	document.getElementById("word").innerHTML = chosenWord.join(" ");

	// begin game responsiveness
	document.onkeypress = function(event){

		var userGuess = event.key;
		// console.log(userGuess);
		var userGuess = userGuess.toLowerCase()
		var userGuess = userGuess.replace(/[\W_0-9]+/, "")
		answerCheck(userGuess);

	}

	// check answers
	function answerCheck(x) {

		for (var i = 0; i < answer.length; i++){

			// check if input is in answer
			if (x === answer[i]){
				chosenWord[i] = x
				document.getElementById("word").innerHTML = chosenWord.join(" ")
				pickedLetters.push(x)
			}

			// check for previous existence of wrong letter
			else if (answer.indexOf(x) === -1 && pickedLetters.indexOf(x) === -1){
				wrongLetters.push(x)
				pickedLetters.push(x)
				document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ")
				guessesLeft--
				document.getElementById("remaining").innerHTML = "Guesses Remaining: " + guessesLeft
				
				// loss condition
				if (guessesLeft === 0){
					alert("Game Over!")
					newGame()
				}
			}
		}
		// win condition and reset
		if (chosenWord.indexOf("_") === -1){
			alert("Congratulations!")
			wins++
			newGame()
		}

		// write current score
		document.getElementById("score").innerHTML = "Score: " + wins
	}

}
