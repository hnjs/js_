var view = {
	displayMessage: function(msg) {
		document.getElementById("messagearea").innerHTML = msg;
	},
	displayHit: function(location) {
		document.getElementById(location).setAttribute("class", "hit");
	},
	displayMiss: function(location) {
		document.getElementById(location).setAttribute("class", "miss");
	}
 };

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	usedGuesses: [],
	ships: [{locations:[0, 0, 0], hits: ["", "", ""]},
			{locations:[0, 0, 0], hits: ["", "", ""]},
			{locations:[0, 0, 0], hits: ["", "", ""]}],
	
	fire: function(guess) {
		for (var i=0; i<this.shipLength; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("You HIT the ship!");
				if (this.isSunk(ship)) {
					this.shipsSunk++;
					view.displayMessage("You sank "+ this.shipsSunk +" ship(s) !!!");
				}
				if (this.usedGuesses.indexOf(guess) < 0) {
					this.usedGuesses.push(guess);
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		if (this.usedGuesses.indexOf(guess) < 0) {
			this.usedGuesses.push(guess);
		}
		return false;
	},
	
	isSunk: function(ship) {
		for (var i=0; i<this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i=0; i<this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) {
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		}
		else {
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocation = [];
		for (var i=0; i<this.shipLength; i++) {
			if (direction === 1) {
				newShipLocation.push(row+""+(col+i));
			}
			else {
				newShipLocation.push((row+i)+""+col);
			}
		}
		return newShipLocation;
	},

	collision: function(locations) {
		for (var i=0; i<this.numShips; i++) {
			var ship = this.ships[i];
			for (var j=0; j<locations.length; j++) {
				var index = ship.locations.indexOf(locations[j]);
				if (index >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};

var controller = {
	guesses: 0,
	processGuess: function(guess){
		var location = parseGuess(guess); // used to handle text inputs such as A0, B4
		//var location = guess; // used to handle mouse clicks
		if (location) {		// if null value then this is falsey else truthy
			this.guesses++;
			var hit = model.fire(location);

			if (hit && model.shipsSunk == model.numShips) {
				view.displayMessage("You sunk all the ships in "+this.guesses+" guesses");
			}
		}
	}
};

function parseGuess(guess){
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
	guess = guess.toUpperCase();
	if (guess === null || guess.length !== 2) {
		alert("Invalid input: Either empty or too long input");
	}
	else {
		var row = alphabet.indexOf(guess.charAt(0));
		var column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Invalid input: Input location is not on the board");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
			alert("Invalid input: Input location is off the board size");
		} else {
			if (model.usedGuesses.indexOf(row+column) >= 0) {
				alert("Invalid input: That location already guess. Try a different location");
			} else {
				return row+column;
			}
		}
	}
	return null;
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}

function handleKeyPress (e) {
	if (e.keyCode === 13) {
		var fireButton = document.getElementById("fireButton");
		fireButton.click();
		return false;
	}
}

function handleCellClick(eventObject) {
	var cell = eventObject.target;
	controller.processGuess(cell.id);
}

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

/*	var cells = document.getElementsByTagName("td"); // uncomment this block to handle cell clicks
	for (var i=0; i<cells.length; i++) {
		cells[i].onclick = handleCellClick;
	}*/
	model.generateShipLocations();
}

window.onload = init;

/*
view.displayMessage("You hit the ship! You sank it!!");
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
*/
/*
model.fire("53");
model.fire("06"); model.fire("16"); model.fire("26");
model.fire("34"); model.fire("24"); model.fire("44");
model.fire("12"); model.fire("11"); model.fire("10");
*/
/*
controller.processGuess("A0");
controller.processGuess("A6"); controller.processGuess("B6"); controller.processGuess("C6");
controller.processGuess("C4"); controller.processGuess("D4"); controller.processGuess("E4");
controller.processGuess("B0"); controller.processGuess("B1"); controller.processGuess("B2");
*/
/*
console.log(parseGuess("A0")); 
console.log(parseGuess("B6")); 
console.log(parseGuess("G3")); 
console.log(parseGuess("H0")); 
console.log(parseGuess("A7"));
*/
/*
var s = "abcdfeghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for (var i=0; i<s.length; i++)
console.log(s.charAt(i)+" --- "+s.charCodeAt(i));
*/

//console.log(isNaN("0."));






