const LaunchPageSetup = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();


    let continueButton = $('<button>Start!</button>');
    continueButton.click(function () {
        const enteredName = $('#nameEntry').val().trim().toLowerCase();

        if (enteredName) {
            name = enteredName;
            picture = selectRandomPicture();
            CategoryPageSetup();
        } else {
            alert('Please enter a valid name!');
        }

    });

    rootContainer.append('<div class \'mainText\'>Let\'s play Trivia!</div>');
    rootContainer.append('<input type=\'text\' id=\'nameEntry\' class=\'textBox\' placeholder=\'Enter your name\'><br>');
    rootContainer.append(continueButton);
};
$(document).ready(function () {
    LaunchPageSetup();
});