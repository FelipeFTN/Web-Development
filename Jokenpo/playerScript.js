
var playerImg = document.getElementById('Player');
var IAImg = document.getElementById('IA');
var playerMove = 0;


function rock(){
    playerImg.style.display = "initial";
    playerImg.setAttribute('src', 'images/rock.png');
    playerMove = 0;
    IA();
    calculateScore();
}
function paper(){
    playerImg.style.display = "initial";
    playerImg.setAttribute('src', 'images/paper.png');
    playerMove = 1;
    IA();
    calculateScore();
}
function scissors(){
    playerImg.style.display = "initial";
    playerImg.setAttribute('src', 'images/scissors.png');
    playerMove = 2;
    IA();
    calculateScore();
}
function play(){
    gameDiv[0].style.display = "block";
    gameReset[1].style.display = "initial";
    var playButton = document.getElementById('play');
    playButton.style.display = "none";
    var gameIntroduction = document.getElementById('introduction');
    gameIntroduction.style.display = "none";
}
