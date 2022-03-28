let teamOneScore = 0;
let teamTwoScore = 0;
let teamThreeScore = 0;
let teamFourScore = 0;
let teams = 2;
let sumScore = 0;


function teamOneTd() {
    teamOneScore += 6;
    draw();
}

function touchdown(teamNum) {
    switch (teamNum) {
        case 1:
            teamOneScore += 6;
            break;
        case 2:
            teamTwoScore += 6;
            break;
        case 3:
            teamThreeScore += 6;
            break;
        case 4:
            teamFourScore += 6;
        default:
            console.log("bruh what")
    }
    drawScoreBoard();
}

function threePointer(teamNum) {
    switch (teamNum) {
        case 1:
            teamOneScore += 3;
            break;
        case 2:
            teamTwoScore += 3;
            break;
        case 3:
            teamThreeScore += 3;
            break;
        case 4:
            teamFourScore += 3;
            break;
    }
    drawScoreBoard();
}

function drawTeams() {
    let template = "";
    for (let i = 1; i <= teams; i++) {
        let bgColor = "";
        let tdBtnColor = "";
        let tpBtnColor = "";
        if (i % 2 == 0) {
            bgColor = "bg-success";
            tdBtnColor = "btn-primary";
            tpBtnColor = "btn-secondary";
        } else {
            bgColor = "bg-primary";
            tdBtnColor = "btn-success";
            tpBtnColor = "btn-secondary";
        }
        template += `
        <div class="col text-center ${bgColor} p-4 rounded-3">
                    <h2 class="m-0 text-light">Team ${i}</h2>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-lg text-light ${tdBtnColor}" onclick="touchdown(${i})">Touchdown</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-lg text-light ${tpBtnColor}" onclick="threePointer(${i})">3 Pointer</button>
                        </div>
                    </div>
                 </div>
        `
    }
    document.getElementById("teams").innerHTML = template;
}

function drawScoreBoard() {
    let template = "";
    for (let i = 1; i <= teams; i++) {
        let score;
        switch (i) {
            case 1:
                score = teamOneScore;
                break;
            case 2:
                score = teamTwoScore;
                break;
            case 3:
                score = teamThreeScore;
                break;
            case 4:
                score = teamFourScore;
                break;
        }
        template += `
        <div class="col d-flex justify-content-center border py-3">
            <h5 id="team-one-score" class="m-0">${score}</h5>
        </div>
        `
    }
    document.getElementById("scores").innerHTML = template;
    template = "";
    for (let i = 1; i <= teams; i++) {
        template += `
            <div class="col d-flex justify-content-center border py-3">
                <h5 class="m-0">Team ${i}'s Score</h5>
            </div>
        `
    }

    sumScore = teamOneScore + teamTwoScore + teamThreeScore + teamFourScore;
    document.getElementById("sum-score").innerText = sumScore;

}

function addTeam() {
    if(teams == 4)
        alert("The max players allowed in Scorebruh is four.");
    else   
        teams++;
    switch (teams) {
        case 3:
            drawTeams();
            drawScoreBoard();
            break;
        case 4:
            drawTeams();
            drawScoreBoard();
            break;
    }
}


function reset() {
    teamOneScore = 0;
    teamTwoScore = 0;
    teamThreeScore = 0;
    teamFourScore = 0;
    drawScoreBoard();
}

function draw() {
    sumScore = teamOneScore + teamTwoScore + teamThreeScore + teamFourScore;
    document.getElementById("team-one-score").innerText = teamOneScore;
    document.getElementById("team-two-score").innerText = teamTwoScore;
    document.getElementById("sum-score").innerText = sumScore;
}
drawScoreBoard();
drawTeams();