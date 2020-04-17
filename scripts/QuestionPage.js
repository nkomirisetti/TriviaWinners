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

        timeContainer = $(`<div class = 'timeContainer'></div>`);
        questionContainer = $(`<div class = 'questionContainer'></div>`);
        
        scoreContainer = $(`<div class = 'scoreContainer'></div>`);
        let returnButton = $(`<button class = 'quitButton'>Quit</button>`);
        returnButton.click(function(){
            clearInterval(questionTimerInstance);
            CategoryPageSetup();
        });

        let headerContainer = $(`<div class='pageHeader'></div>`)
        headerContainer.append(scoreContainer);
        headerContainer.append(returnButton);

        rootContainer.append(headerContainer);
        rootContainer.append(questionContainer);
        rootContainer.append(timeContainer);
        rootContainer.append(buildPlayerContainer());
        setNextQuestion();
    });

    const buildQuestionDiv = function (question) {
        isAnswerClicked = false;
        let questionDiv = $(`<div class='answersList'></div>`);
        questionDiv.append(`<div class='questionTitle'> Question ` + (questionNumber + 1) + `: ` + question.question + `</div>`);
        if (question.type === 'boolean') {
            let trueButton = $('<button>True</button>');
            let falseButton = $('<button>False</button>');
            let correctAnswer = question.correct_answer === 'True';
            trueButton.click(function () {
                if (isAnswerClicked === false) {
                    if (correctAnswer === true) {
                        trueButton.addClass('correctAnswer');
                    } else {
                        trueButton.addClass('incorrectAnswer');
                    }
                    answerClicked(correctAnswer === true);
                }
            });

            falseButton.click(function () {
                if (isAnswerClicked === false) {
                    if (correctAnswer === false) {
                        falseButton.addClass('correctAnswer');
                    } else {
                        trueButton.addClass('correctAnswer');
                        falseButton.addClass('incorrectAnswer');
                    }
                    answerClicked(correctAnswer === false);
                }
            });

            questionDiv.append(trueButton);
            questionDiv.append(falseButton);
        } else {
            let answers = [];

            let correctAnswerButton = $('<button>' + question.correct_answer + '</button>');
            correctAnswerButton.click(function () {
                if (isAnswerClicked === false) {
                    correctAnswerButton.addClass('correctAnswer');
                    answerClicked(true);
                }
            });


            for (const answer of question.incorrect_answers) {
                let incorrectAnswerButton = $('<button>' + answer + '</button>');
                incorrectAnswerButton.click(function () {
                    if (isAnswerClicked === false) {
                        incorrectAnswerButton.addClass('incorrectAnswer');
                        correctAnswerButton.addClass('correctAnswer');
                        answerClicked(false);
                    }
                });

                answers.push(correctAnswerButton);
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
            ScorePageSetup(score, questionsCorrect, categoryID);
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
