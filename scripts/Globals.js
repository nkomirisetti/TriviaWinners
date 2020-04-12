var name;
var picture;

const selectRandomPicture = function () {
	return Math.floor(Math.random() * 18);
}
const animalsList = ['bee', 'bunny', 'cat', 'elephant', 'flamingo', 'fox', 'giraffe', 'hippo', 'koala', 'leopard', 'lion', 'monkey', 'moose', 'octopus', 'panda', 'polar-bear', 'puppy', 'racoon'];

const shuffleArray = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const buildPlayerContainer = function () {
	return $(`<div class='playerInfo'>
				<img src='assets/animals/` + animalsList[picture] + `.png'></img>
				<div class='playerText'>` + name + `</div>
			  </div>`);
}

const printSQL = function () {
	let output = "";
	for (let i = 0; i < animalsList.length; i++) {
		output +='INSERT INTO `sprites`(`spriteID`, `spriteName`) VALUES (' + i + ',"' + animalsList[i] +'");\n';
	}
	console.log(output);
}

const nth = function(d) {
	if (d > 3 && d < 21) return 'th';
	switch (d % 10) {
	  case 1:  return "st";
	  case 2:  return "nd";
	  case 3:  return "rd";
	  default: return "th";
	}
  }
  