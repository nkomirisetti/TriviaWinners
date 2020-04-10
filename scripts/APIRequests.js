const APIBase = function (URL) {
    let settings = {
        "method": "GET",
        "timeout": 0,
        "headers": {

        },
    };
    settings.url = URL;

    return settings;
}

const getCategory = function () {
    return APIBase('https://opentdb.com/api_category.php');
}

const getQuestion = function (questionID) {
    if (questionID === 'ALL') {
        return APIBase('https://opentdb.com/api.php?amount=10')
    } else {
        return APIBase('https://opentdb.com/api.php?amount=10&category=' + questionID);
    }
}