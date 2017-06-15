
// var wordbase = ["apple", "orange", "class", "facebook"];
// var pickedLetters = [];
// var wrongLetters = []
// var answerArray =[]

var wins = 0;
newGame()
// game functions

// setting up game
function newGame() {
	var wordbase = ["apple", "orange", "class", "facebook"]
	var pickedLetters = []
	var wrongLetters = []
	var winCondition = false
	console.log(winCondition)

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
		console.log(userGuess);
		var userGuess = userGuess.toLowerCase()
		var userGuess = userGuess.replace(/[\W_0-9]+/, "")
		answerCheck(userGuess);
	}

	// check answers
	function answerCheck(x) {

		for (var i = 0; i < answer.length; i++){

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
				if (guessesLeft === 0){
					alert("Game Over!")
				}
			}
		}
		// win condition
		if (chosenWord.indexOf("_") === -1){
			alert("Congratulations!")
			wins++
			document.getElementById("score").innerHTML = "Score: " + wins
			var winCondition = true
		}
		// new word on reset!
		if (winCondition === true) {
			newGame()
		}
	}

}

