const CategoryPageSetup = function () {
    $.ajax(getCategory()).done(function (response) {
        categories = response.trivia_categories;

        let rootContainer = $('#rootContainer');
        rootContainer.empty();

        let title = $(`<div class='title'>Choose a Category</div>`);
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
                CountdownPageSetup(category.id, category.name);
            });
            categoriesList.append(button);
        };

        let leaderBoardButton = $('<button class="miniButton">Leaderboards</button>');
        leaderBoardButton.click(function(){
            LeaderboardSelectSetup();
        })

        rootContainer.append(title);
        rootContainer.append(categoriesList);
        rootContainer.append(leaderBoardButton);
    });
};
