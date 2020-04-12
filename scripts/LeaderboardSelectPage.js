const LeaderboardSelectSetup = function () {
    $.ajax(getCategory()).done(function (response) {
        categories = response.trivia_categories;

        let rootContainer = $('#rootContainer');
        rootContainer.empty();

        let title = $(`<div class='title'>View Leaderboards</div>`);
        let categoriesList = $(`<div class='categoriesList'></div>`);
        
        categories.unshift(
            {
                "id": 0,
                "name": "Everything!"
            }
        )

        for (const category of categories) {
            let button = $('<button>' + category.name + '</button>');
            button.click(function () {
                LeaderboardPageSetup(category.id);
            });
            categoriesList.append(button);
        };

        let leaderBoardButton = $('<button class="miniButton">Return</button>');
        leaderBoardButton.click(function(){
            CategoryPageSetup();
        })

        rootContainer.append(title);
        rootContainer.append(categoriesList);
        rootContainer.append(leaderBoardButton);
    });
};
