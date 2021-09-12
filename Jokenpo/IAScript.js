var paperMove = 0;
var rockMove = 0;
var scissorsMove = 0;
var IAMove = Math.floor(Math.random(0, 2) * 3);

function IA(){
    //IA

    //CONTAR QUANTIDADES DE JOGADAS
    switch (playerMove){
        case 0:
            rockMove = rockMove + 1;
        break;
        case 1:
            paperMove = paperMove + 1;
        break;
        case 2:
            scissorsMove = scissorsMove + 1;
        break;
    }

    //IDENTIFICAR QUAL FOI MAIS JOGADO
    if (rockMove > paperMove && rockMove > scissorsMove){
        IAMove = 1;
    } else if (paperMove > rockMove && paperMove > scissorsMove){
        IAMove = 2;
    } else if (scissorsMove > rockMove && scissorsMove > paperMove){
        IAMove = 0;
    } else if (rockMove == paperMove && paperMove == scissorsMove){
        IAMove = Math.floor(Math.random(0, 2) * 3); 
    }

    //RESETAR VALORES DE JOGADAS
    if (paperMove >= 3){
        paperMove = 1;
    } else if (rockMove >= 3){
        rockMove = 1;
    } else if (scissorsMove >= 3){
        scissorsMove = 1;
    }

    //MOVIMENTOS BASICOS
    switch (IAMove){
        case 0:
            IAImg.setAttribute('src', 'images/rock.png');
            IAImg.style.display = "initial";
        break;
        case 1:
            IAImg.setAttribute('src', 'images/paper.png');
            IAImg.style.display = "initial";
        break;
        case 2:
            IAImg.setAttribute('src', 'images/scissors.png');
            IAImg.style.display = "initial";
        break;
    }
}
