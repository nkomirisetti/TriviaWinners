const CountdownPageSetup = function (questionID, categoryName) {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let timerDiv = $(`<div class='countdownTimer'>3<div>`);

    let timeDown = 3;
    let countDown = setInterval(function () {
        timeDown -= 1;
        if (timeDown === 0) {
            clearInterval(countDown);
            QuestionPageSetup(questionID);
        } else {
            timerDiv.text(timeDown);
        }
    }, 1000);

    let subTextDiv = $(`<div class='subtext'>` + categoryName + `</div>`)
    rootContainer.append(timerDiv);
    rootContainer.append(subTextDiv);

    
};