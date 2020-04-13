const LaunchPageSetup = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();


    alert('This page works best in a browser other than Safari on iPhone');
    let continueButton = $('<button>Start!</button>');
    continueButton.click(function () {
        const enteredName = $('#nameEntry').val().trim().toLowerCase();

        if(!enteredName){
            alert('Please enter a valid name!');
        } else if (enteredName.length > 10){
            alert('That name is too long! Shrink it down a bit!');
        } else if (/[^a-z]/i.test(enteredName)) {
            alert('Make sure you only use letters!')
        } else {
            name = enteredName;
            picture = selectRandomPicture();
            CategoryPageSetup();
        }
    });

    rootContainer.append('<div class=\'mainText\'>Let\'s play Trivia!</div>');
    rootContainer.append('<input type=\'text\' id=\'nameEntry\' class=\'textBox\' placeholder=\'Enter your name\'><br>');
    rootContainer.append(continueButton);
};
$(document).ready(function () {
    LaunchPageSetup();
});