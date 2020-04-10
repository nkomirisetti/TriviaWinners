var questions;
var name;
var picture;

const initialize = function () {
    questions = '';
};
const selectRandomPicture = function () {
    return animalsList[Math.floor(Math.random() * 18)];
}
const animalsList = ['bee', 'bunny', 'cat', 'elephant', 'flamingo', 'fox', 'giraffe', 'hippo', 'koala', 'leopard', 'lion', 'monkey', 'moose', 'octopus', 'panda', 'polar-bear', 'puppy', 'racoon'];