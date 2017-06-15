
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

Array.from(wrench
decide
excite
shaky
annoying
uneven
decay
memorise
useful
bed
box
subdued
harm
cream
tightfisted
acoustic
idea
lumpy
party
tame
demonic
sleepy
whispering
nostalgic
design
carve
disappear
telling
tacky
confess
planes
claim
tan
voracious
argue
daffy
advise
chess
pan
brake
wary
periodic
giants
hook
room
trite
drain
cushion
friction
battle
store
tall
basin
slimy
unwieldy
point
fly
bumpy
underwear
grass
drunk
careless
resolute
announce
cakes
thirsty
lowly
sun
jaded
deserted
switch
zipper
fuzzy
ablaze
flood
idiotic
continue
match
juvenile
cap
beautiful
smoke
alarm
obtainable
gold
female
rare
hop
ubiquitous
tickle
cute
abrasive
raise
rigid
scarf
deadpan
coal
spark
horse
sincere
cooing
picayune
babies
silver
hang
petite
depend
science
linen
pump
minute
popcorn
hate
woman
pretty
thick
protective
wonder
sudden
material
remember
plant
piquant
nut
elegant
brave
shaggy
weigh
tiresome
taste
mute
screw
edge
walk
pies
meeting
divide
whole
impress
previous
vest
berry
expand
street
hissing
bolt
harass
jellyfish
stiff
yoke
ripe
serious
watery
entertaining
bomb
wriggle
right
determined
abnormal
boil
curvy
exchange
toad
adamant
dizzy
innocent
cheerful
glib
consider
guide
bag
plan
wish
versed
smoggy
baseball
shiny
tug
scent
ear
mom
rule
breathe
new
woozy
devilish
show
flowery
glow
substantial
nutritious
reply
worthless
fine
acoustics
weary
dapper
story
loose
argument
change
save
knife
pour
honey
drain
prose
aback
vivacious
deer
sound
thin
stop
scarce
tenuous
bad
placid
six
gleaming
tick
elderly
ritzy
glistening
same
crazy
sweet
needless
safe
birthday
observant
craven
walk
health
creator
amused
sleet
wall
long
copper
sneeze
note
fallacious
class
lamentable
learned
obscene
reflective
detailed
ajar
pink
tease
shallow
black
weight
mysterious
joyous
cause
full
cactus
fold
hope
scribble
wretched
blade
teeny
pancake
brush
evanescent
tedious
stocking
tawdry
woebegone
soap
naive
guard
destroy
known
book
chicken
cheat
ghost
familiar
analyse
wasteful
cake
moor
few
pencil
finger
retire
actually
lacking
lumber
bow
cagey
hydrant
account
adjoining
paste
balance)






