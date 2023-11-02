var displayResults = false;
var rock;
var paper;
var scissors;
var ownRock;
var ownPaper;
var ownScissors;
var resultLabel;

function init(){
    rock = document.querySelector('#rock');
    paper = document.querySelector("#paper");
    scissors = document.querySelector("#scissors");
    ownRock = document.querySelector('#ownRock');
    ownPaper = document.querySelector("#ownPaper");
    ownScissors = document.querySelector("#ownScissors");
    resultLabel = document.querySelector("h1");
}

function restart(){
    rock.style.visibility = "hidden";
    paper.style.visibility = "hidden";
    scissors.style.visibility = "hidden";
    resultLabel.innerHTML = "";
    ownRock.style.border = "none";
    ownPaper.style.border = "none";
    ownScissors.style.border = "none";
    displayResults = false;
}

function pick(choice){
    if(!displayResults){
        var botNum = getRandomInt(1,3);
        var botPick = "";
        switch(botNum){
            case 1 : botPick = "rock"; break;
            case 2 : botPick = "paper"; break;
            case 3 : botPick = "scissors"; break;
            default : console.log("error");
        }
        console.log(choice)
        console.log(botPick)
        switch(botPick){
            case "rock" : {
                if(choice == "paper") {
                    resultLabel.innerHTML = "Nyertél";
                    ownPaper.style.border = "thick solid green";
                }
                else if(choice == "rock") {
                    resultLabel.innerHTML = "Döntetlen";
                    ownRock.style.border = "thick solid yellow";
                }
                else {
                    resultLabel.innerHTML = "Vesztettél";
                    ownScissors.style.border = "thick solid red";
                }
                rock.style.visibility = "visible";
                displayResults = true;
                break;
            }
            case "paper" : {
                if(choice == "scissors") {
                    resultLabel.innerHTML = "Nyertél";
                    ownScissors.style.border = "thick solid green";
                }
                else if(choice == "paper") {
                    resultLabel.innerHTML = "Döntetlen";
                    ownPaper.style.border = "thick solid yellow";
                }
                else {
                    resultLabel.innerHTML = "Vesztettél";
                    ownRock.style.border = "thick solid red";
                }
                paper.style.visibility = "visible";
                displayResults = true;
                break;
            }
            case "scissors" : {
                if(choice == "rock") {
                    resultLabel.innerHTML = "Nyertél";
                    ownRock.style.border = "thick solid green";
                }
                else if(choice == "scissors") {
                    resultLabel.innerHTML = "Döntetlen";
                    ownScissors.style.border = "thick solid yellow";
                }
                else {
                    resultLabel.innerHTML = "Vesztettél";
                    ownPaper.style.border = "thick solid red";
                }
                scissors.style.visibility = "visible";
                displayResults = true;
                break;
            }
            default : displayResults = false;

        }
        resultLabel.style.visibility = displayResults ? "visible" : "hidden";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }