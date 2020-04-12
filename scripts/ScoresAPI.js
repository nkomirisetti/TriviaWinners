const postScores = function (name, spriteID, score, category) {
    return {
        "url": "https://triviawinners.herokuapp.com/score?name=" + name + "&spriteID=" + spriteID + "&score=" + score + "&category=" + category,
        "method": "POST",
        "timeout": 0,
        "crossDomain":true
    };
}

const getScores = function(category){
    return {
        "url": "https://triviawinners.herokuapp.com/highscores?category=" + category,
        "method": "GET",
        "timeout": 0,
        "crossDomain":true
    };};