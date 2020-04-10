const LaunchPageSetup = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();  
    
    rootContainer.append('<div class \'mainText\'>Let\'s play Trivia!></div>');
    titleContainer.append('<input type=\'text\' id=\'nameEntry\' class=\'textBox\' placeholder=\'Enter your name\'><br>');

    
};
$(document).ready(function () {
    LaunchPageSetup();
});