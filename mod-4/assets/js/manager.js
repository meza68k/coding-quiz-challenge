var timer;
var elTime = document.getElementById("time");

var gameTime = 30;

function countdown() {
    if(gameTime > 0){
        gameTime-- 
        elTime.textContent = gameTime
    }
    else{
        clearInterval(duhTime);
        showScores();
    } 
};

function startTime() {
    duhTime = setInterval(countdown, 1000);
    
};



var startButton = document.getElementById("start-btn");

startButton.onclick = function () {
    document.getElementById("quiz-prompt").style.display = "none";
    document.getElementById("questions").style.display = "block";
    startTime();
    console.log(elTime);
};