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

        const scoreResult = 'You got ' + questionsCorrect + ' question';
        if (questionsCorrect != 1) {
            scoreResult += 's';
        }
        scoreResult += '. You placed ' + response[0].position + nth(response[0].position) + ' for this category';

        rootContainer.append(`<div class='scoreLabel'>Your score is ` + score + `</div>`);
        rootContainer.append(`<div class='scoreSubLabel'>` + scoreResult + `</div>`);
        rootContainer.append(returnButton);
        rootContainer.append(buildPlayerContainer());
    });
}