const ScorePageSetup = function (score, questionsCorrect) {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let returnButton = $('<button>Back to Categories</button>');
    
    //TODO add scoreboard option
    
    returnButton.click(function () {
        CategoryPageSetup();
    });
    rootContainer.append(`<div class='scoreLabel'>Your score is ` + score + `</div>`);
    rootContainer.append(`<div class='scoreSubLabel'>You got ` + questionsCorrect + ` questions correct</div>`);
    rootContainer.append(returnButton);
    rootContainer.append(buildPlayerContainer());
}
