var name;
var picture;

const selectRandomPicture = function () {
    return animalsList[Math.floor(Math.random() * 18)];
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
