var Letters = require('./letters.js')

function Word(text){
	this.text = Array.from(text)
	this.game = this.text.map(x => new Letters("" + x)) 
	this.guessed = []
}

Word.prototype.print = function (word) {
	var result = this.game.map(x => x.display)
	console.log(result.join(" , "))
}


Word.prototype.guess = function (letter) {
	let result = false
	this.game.forEach( function(foo) {
		foo.check("" + letter)
		if (foo.check(letter)) {
			result = true
		}
	})
	this.guessed.push(letter)
//	this.print()
	
	return result
	}		

Word.prototype.allGuessed = function (word) {
	var result = this.game.map(x => x.guessed)
//	if the index of false is -1 there is no false aka you win
	if (result.indexOf(false) === -1) return true;
	else return false;

}
//var a = new Letters("a")
//console.log(a)
//var test = new Word("roch")
//test.print()
//test.guess("r")
//console.log(test.game[0])
//test.guess("r")
//test.print()

module.exports = Word
