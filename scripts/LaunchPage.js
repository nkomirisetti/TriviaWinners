const LaunchPageSetup = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();  
    
    rootContainer.append('<div class \'mainText\'>Let\'s play Trivia!></div>');
    titleContainer.append('<input type=\'text\' id=\'nameEntry\' class=\'textBox\' placeholder=\'Enter your name\'><br>');

    let continueButton = $('<button>Start!</button>');
    continueButton.click(function(){
        const enteredName = $('#nameEntry').val().trim().toLowerCase();

        if (enteredName) {
            name = enteredName;
            picture = selectRandomPicture();
            CategoryPageSetup();
        } else {
            alert('Please enter a valid name!');
        }

    });
};
$(document).ready(function () {
    LaunchPageSetup();
});