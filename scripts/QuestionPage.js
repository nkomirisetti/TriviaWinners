const QuestionPageSetup = function (categoryID) {
    let questionNumber;
    let score;
    let questions;
    let questionTimerInstance;
    let questionsCorrect;
    let timeLeft;
    let isAnswerClicked;

    let questionContainer;
    let scoreContainer;
    let timeContainer;

    $.ajax(getQuestion(categoryID)).done(function (response) {
        questions = response.results;
        score = 0;
        questionNumber = -1;
        questionsCorrect = 0;

        let rootContainer = $('#rootContainer');
        rootContainer.empty();

        questionContainer = $(`<div class = 'questionContainer'></div>`);
        scoreContainer = $(`<div class = 'scoreContainer'></div>`);
        timeContainer = $(`<div class = 'timeContainer'></div>`);

        rootContainer.append(scoreContainer);
        rootContainer.append(questionContainer);
        rootContainer.append(timeContainer);
        setNextQuestion();
    });

    const buildQuestionDiv = function (question) {
        isAnswerClicked = false;
        let questionDiv = $(`<div></div>`);
        questionDiv.append(`<div class='questionTitle'> Question ` + (questionNumber + 1) + `: ` + question.question + `</div>`);
        if (question.type === 'boolean') {
            
        } else {
            let answers = [];

            let correctAnswerButton = $('<button>' + question.correct_answer + '</button>');
            correctAnswerButton.click(function () {
                if (isAnswerClicked === false) {
                    correctAnswerButton.addClass('correctAnswer');
                    answerClicked(true);
                }
            });

            answers.push(correctAnswerButton);

            for (const answer of question.incorrect_answers) {
                let incorrectAnswerButton = $('<button>' + answer + '</button>');
                incorrectAnswerButton.click(function () {
                    if (isAnswerClicked === false) {
                        incorrectAnswerButton.addClass('incorrectAnswer');
                        answerClicked(false);
                    }
                });

                answers.push(incorrectAnswerButton);
            }

            shuffleArray(answers);
            for (const answer of answers) {
                questionDiv.append(answer);
            }

        }
        return questionDiv;
    }

    const setNextQuestion = function () {
        clearInterval(questionTimerInstance);
        questionNumber += 1;
        // TODO make this dynamic based on number of questions
        if (questionNumber === 10) {
            ScorePageSetup(score, questionsCorrect);
            return;
        }
        timeLeft = 60;
        questionContainer.empty();
        questionContainer.append(buildQuestionDiv(questions[questionNumber]));

        scoreContainer.text(score + " Points");

        questionTimerInstance = setInterval(questionTimer, 1000);
        timeContainer.text(timeLeft);
    }

    const answerClicked = function (answer) {
        isAnswerClicked = true;
        setTimeout(function () {
            if (answer) {
                correctAnswer()
            } else {
                incorrectAnswer()
            }
        }, 3000);
    }

    const questionTimer = function () {
        timeLeft -= 1;
        if (timeLeft == 0) {
            incorrectAnswer();
        }
        timeContainer.text(timeLeft);
    }

    const correctAnswer = function () {
        score += 50;
        score += timeLeft;
        questionsCorrect += 1;
        setNextQuestion();
    }

    const incorrectAnswer = function () {
        setNextQuestion();
    }
};