var Word = require('./words.js')
var inquirer = require('inquirer')
var testWord = 'october'
var testWords = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'november',
	'december'
	]
var chances = 0
var test = new Word(testWord)

var list = testWords.map( x => new Word (x)
)
//console.log(JSON.stringify(list, null, 2))
//var testGuess = 'a'
//test.guess(testGuess)
//console.log(test)

//console.log(list[0].print())


function letsPlay(num, word) {
//console.log(num)
console.log("Guess the word, \n You have 88888888s \n The Word is: ")

let currentWord
if(word) {currentWord = word}
else {currentWord = test}
//console.log(currentWord)
currentWord.print()
while (num < 8) {
inquirer.
  prompt([
	{
	type: "input",
	message: "Enter a letter: ",
	name: "guessed"
	}

  ]).then(function(inquirerResponse) {


//	console.log(inquirerResponse.guessed)
	currentWord.guess(inquirerResponse.guessed)
//	currentWord.print()

//	if your guess was right, don't lose a guess
if (currentWord.guess(inquirerResponse.guessed)) {
	console.log("You were Correct!")
	num++
} 



	currentWord.allGuessed()
//if there all are guessed then you win
if (currentWord.allGuessed()) {
	 console.log("You Win!") 
	return;
	}


//if you run out of guesses you lose
if (num < 1 ) {
	console.log("Ran out of guesses") 
	return
}
	console.log("You have " + num + " guesses left")
	currentWord.print()
	num++
    })
num++
}
}

// list.forEach(function(element) {
 
 letsPlay(0, list[0])
 
// })
