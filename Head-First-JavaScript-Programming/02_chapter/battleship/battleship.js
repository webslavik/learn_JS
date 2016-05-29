
var randomLoc = Math.floor(Math.random() * 5);

var random = Math.floor(Math.random() * num);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var guesses = 0;
var hits = 0;

// var isSunk = false;
var isSunk = true;

while (isSunk) {

  guess = prompt('Ready, aim, fire! (enter anumber 0-6):');

  if (guess < 0 || guess > 6) {
    alert('Please enter a valid cell number!');
    continue;
  } else {
    guesses++;
  }

  // if (guess == location1) {
  //   hits++;
  // } else if (guess == location2) {
  //   hits++;
  // } else if (guess == location3) {
  //   hits++
  // }

  if (guess == location1 || guess == location2 || guess == location3) {
    hits++;

    alert('HIT!');

    if (hits == 3) {

      isSunk = false;

      alert('You sank my battleship!');

    }

  } else {
    alert('MISS');
  }

}

var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' +
            'which means your shooting accuracy was ' + (3/guesses);
alert(stats);
