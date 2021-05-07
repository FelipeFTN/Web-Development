var playerScore = 0;
var IAScore = 0;
var scorePoints = document.getElementById('score');

function calculateScore(){
    //PLAYER SCORE
    if (playerMove == 0 && IAMove == 2){
        playerScore = playerScore + 1;
    } else if (playerMove == 1 && IAMove == 0){
        playerScore = playerScore + 1;
    } else if (playerMove == 2 && IAMove == 1){
        playerScore = playerScore + 1;
    }

    //IA SCORE
    if (IAMove == 0 && playerMove == 2){
        IAScore = IAScore + 1;
    } else if (IAMove == 1 && playerMove == 0){
        IAScore = IAScore + 1;
    } else if (IAMove == 2 && playerMove == 1){
        IAScore = IAScore + 1;
    }

    scorePoints.innerHTML = playerScore + " X " + IAScore;
}

function reset(){
    playerScore = 0;
    IAScore = 0;
    scorePoints.innerHTML = playerScore + " X " + IAScore;
}