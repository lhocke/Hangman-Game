
var wordbase = ["apple", "orange", "class", "facebook"];
var pickedLetters = [];
var wrongLetters =[]

var wins = 0;
var losses = 0;
// randomly generate answer
var answer = wordbase[Math.floor(Math.random() * wordbase.length)];
var chosenWord = []
// setting up underscores
for (var i = 0; i < answer.length; i++) {
	chosenWord.push("_")
};
// 
document.getElementById("word").innerHTML = chosenWord.join(" ");

document.onkeyup = function(event){
	var userGuess = event.key
}
