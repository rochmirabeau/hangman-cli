function Letter(letter) {

	this.actual = "" + letter,
	this.display = "_",
	this.guessed = false
}

Letter.prototype.check = function(letter) {

	if (this.actual === letter) {
		this.guessed = true
		this.display = letter
		return true
	}
	else return false
}

Letter.prototype.create = function(letter) {
	letter = new Letter
}



// var test = new Letter("g")
// 
// console.log(test)
// test.check("g")
// 
// console.log(test)

module.exports = Letter
