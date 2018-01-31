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

var test = new Word(testWord)

var list = testWords.map( x => new Word (x))
//console.log(JSON.stringify(list, null, 2))
//var testGuess = 'a'
//test.guess(testGuess)
//console.log(test)


console.log("Guess the word, \n You have 8 chances \n The Word is: ")

test.print()

function letsPlay(num) {
//console.log(num)

inquirer.
  prompt([
	{
	type: "input",
	message: "Enter a letter: ",
	name: "guessed"
	}

  ]).then(function(inquirerResponse) {


//	console.log(inquirerResponse.guessed)
	test.guess(inquirerResponse.guessed)
//	test.print()

//	if your guess was right, don't lose a guess
if (test.guess(inquirerResponse.guessed)) {
	console.log("You were Correct!")
	num++
} 



	test.allGuessed()
//if there all are guessed then you win
if (test.allGuessed()) {
	 console.log("You Win!") 
	return;
	}


//if you run out of guesses you lose
if (num < 1 ) {
	console.log("Ran out of guesses") 
	return
}
	console.log("You have " + num + " guesses left")
	test.print()
	letsPlay(num - 1)
    })

	
}

letsPlay(7)
