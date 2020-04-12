const ScorePageSetup = function (score, questionsCorrect, categoryID) {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    rootContainer.append(`<div class='scoreLabel'>Submitting Score...</div>`);
    rootContainer.append(buildPlayerContainer());


    $.ajax(postScores(name, picture, score, categoryID)).done(function (response) {
        rootContainer.empty();
        console.log(response);
        let returnButton = $(`<button class='returnButton'>Back to Categories</button>`);
        returnButton.click(function () {
            CategoryPageSetup();
        });
    
        rootContainer.append(`<div class='scoreLabel'>Your score is ` + score + `</div>`);
        rootContainer.append(`<div class='scoreSubLabel'>You got ` + questionsCorrect + ` questions correct</div>`);
        rootContainer.append(returnButton);
        rootContainer.append(buildPlayerContainer());
    });
}