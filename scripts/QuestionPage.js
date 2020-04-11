let questionNumber;
let score;
let questions;
let questionTimerInstance;

const QuestionPageSetup = function (categoryID) {
    $.ajax(getQuestion(categoryID)).done(function (response) {
        questions = response.results;
        score = 0;
        questionNumber = 0;
        questionTimer = setInterval();

        let rootContainer = $('#rootContainer');
        rootContainer.empty();
        rootContainer.append(buildQuestionDiv(questions[questionNumber]));
    });
};

const buildQuestionDiv = function (question) {
    let questionDiv = $(`<div class='questionDiv'></div>`);
    questionDiv.append(`<div class='questionTitle'>` + question.question + `</div>`);

    let answers = [];

    let correctAnswerButton = $('<button>' + question.correct_answer + '</button>');
    correctAnswerButton.click(function () {
        answerClicked(true);
    });

    answers.push(correctAnswerButton);

    for (const answer of question.incorrect_answers) {
        // TODO add true false case
        let incorrectAnswerButton = $('<button>' + answer + '</button>');
        incorrectAnswerButton.click(function () {
            answerClicked(false);
        });

        answers.push(incorrectAnswerButton);
    }

    shuffleArray(answers);
    for (const answer of answers) {
        questionDiv.append(answer);
    }
    return questionDiv;
}

const answerClicked = function (answer) {
    if (answer) {
        alert('yes!');
    } else {
        alert('bro.');
    }
}

const questionTimer = function () {

}