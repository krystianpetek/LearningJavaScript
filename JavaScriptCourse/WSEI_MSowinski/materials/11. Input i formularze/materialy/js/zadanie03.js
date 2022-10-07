/* jshint -W104 */
document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector('form p button');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        // check input values
        const team1Input = document.querySelector('#team1').value;
        const score1Input = document.querySelector('#points1').value;
        const team2Input = document.querySelector('#team2').value;
        const score2Input = document.querySelector('#points2').value;

        if (team1Input === team2Input || score1Input < 0 || score2Input < 0) {
            return;
        }

        // bind inputs
        const scoreBoard = document.querySelector('div.container table tbody');
        const teamScore = document.createElement('tr');
        const team1 = document.createElement('td');
        team1.innerText = team1Input;
        const team2 = document.createElement('td');
        team2.innerText = team2Input;
        const score = document.createElement('td');
        score.innerText = score1Input + ' - ' + score2Input;

        // create element
        teamScore.appendChild(team1);
        teamScore.appendChild(team2);
        teamScore.appendChild(score);
        scoreBoard.appendChild(teamScore);
    });


});