const ScorePageSetup = function (score, questionsCorrect, categoryID) {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    rootContainer.append(`<div class='scoreLabel'>Submitting Score...</div>`);
    rootContainer.append(buildPlayerContainer());


    $.ajax(postScores(name, picture, score, categoryID)).done(function (response) {
        rootContainer.empty();
        let returnButton = $(`<button class='returnButton miniReturnButton'>Categories</button>`);
        returnButton.click(function () {
            CategoryPageSetup();
        });

        let leaderBoardButton = $(`<button class='miniReturnButton'>View Scoreboard</button>`);
        leaderBoardButton.click(function(){
            LeaderboardPageSetup(categoryID);
        });

        let scoreResult = 'You got ' + questionsCorrect + ' question';
        if (questionsCorrect != 1) {
            scoreResult += 's';
        }
        scoreResult +=  ' correct and placed ' + response[0].position + nth(response[0].position) + ' for this category';

        rootContainer.append(`<div class='scoreLabel'>Your score is ` + score + `</div>`);
        rootContainer.append(`<div class='scoreSubLabel'>` + scoreResult + `</div>`);
        
        rootContainer.append(leaderBoardButton);
        rootContainer.append(returnButton);
        rootContainer.append(buildPlayerContainer());
    });
}