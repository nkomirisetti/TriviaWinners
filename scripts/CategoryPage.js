const CategoryPageSetup = function () {
    $.ajax(getCategory).done(function (response) {
        categories = response.trivia_categories;

        let rootContainer = $('#rootContainer');
        rootContainer.empty();

        let infoContainer = $(`<div class='playerInfo'>
            <img src='assets/animals/ ` + picture + `'></img>
            <div>` + name + `</div>
        </div>`);

        let title = $(`<div class='title'>Choose a Category</div>`);
        let categoriesList = $(`<div class='categoriesList'></div>`);

        for (category in categories) {
            let button = $('<button>' + category.name + '</button>');
            button.click(function () {
                QuestionPageSetup(category.id);
            });
            categoriesList.append(button);
        };

        rootContainer.append(infoContainer);
        rootContainer.append(title);
        rootContainer.append(categoriesList);
    });
};