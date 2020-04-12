const LeaderboardPageSetup = function (categoryID) {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    rootContainer.append(`<div class='scoreLabel'>Loading Leaderboard...</div>`);
    rootContainer.append(buildPlayerContainer());


    $.ajax(getScores(categoryID)).done(function (response) {
        rootContainer.empty();
        let title = $(`<div class='title'>Top 20</div>`);
        let categoriesList = $(`<div class='categoriesList leaderboardList'></div>`);

        for (const player of response) {
            categoriesList.append(buildPlayerContainerCustom(player.name.slice(1, -1), player.score, player.spriteID));
        };



        let returnButton = $('<button class="miniButton">Return</button>');
        returnButton.click(function () {
            CategoryPageSetup();
        });

        rootContainer.append(title);
        rootContainer.append(categoriesList);
        rootContainer.append(returnButton);
    });

}

const buildPlayerContainerCustom = function (name, score, spriteID) {

    return $(`<div class='miniPlayerInfo playerInfo'>
				<img src='assets/animals/` + animalsList[spriteID] + `.png'></img>
				<div class='playerText'>` + score + ': ' + name + `</div>
			  </div>`);
}