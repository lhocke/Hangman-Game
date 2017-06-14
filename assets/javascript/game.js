
var wordbase = ["apple", "orange", "class", "facebook"];
var pickedLetters = [];
var wrongLetters =[]

var wins = 0;
var losses = 0;
// randomly generate answer
var answer = wordbase[Math.floor(Math.random() * wordbase.length)];
console.log(answer)

var chosenWord = []
// setting up underscores
for (var i = 0; i < answer.length; i++) {
	chosenWord.push("_")
};
// print underscores for each letter
document.getElementById("word").innerHTML = chosenWord.join(" ");

// game functions
function answerCheck(x) {
	pickedLetters.push(x)
	for (var i = 0; i < answer.length; i++){

		if (x === answer[i]){
			chosenWord[i] = x;
			document.getElementById("word").innerHTML = chosenWord.join(" ");
			pickedLetters.push(x)
		}
		// else {
		// 	for (var i = 0; i < pickedLetters.length; i++){
		// 		if (x === pickedLetters[i]){
		// 			return
		// 		}

				

		// 	}
		// }
	};
};


// begin game responsiveness

document.onkeyup = function(event){
	var userGuess = event.key;
	console.log(userGuess);

	answerCheck(userGuess);

}