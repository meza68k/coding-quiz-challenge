function populate() {
    if(quiz.isEnded() ) {
        showScores()
    }
    else {
        //shows the  question
        var questionTitle = document.querySelector("#question-title");
        questionTitle.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
            var choiceE1 =  document.getElementById("choice"+i);
            choiceE1.innerHTML = choices[i];
            guess("btn"+i, choices[i]);
        };
        showProgress();
    };
 };

 function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    };
 };

function showProgress() {
    var currentQuestionNum = quiz.questionIndex+ 1;
    var elememt = document.getElementById("progress");
    elememt.innerHTML = "question "+ currentQuestionNum + "of "+ quiz.questions.length;

}

function showScores() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("end-game").style.display = "block";
    var gameOverHtml = "";
    gameOverHtml = quiz.score;
    var gmE1 = document.getElementById("results");
    gmE1.innerHTML = gameOverHtml;
};

var questions = [
    new Question("What does HTML stand for?", ["Hyper Text Proccessor","Hyper Text Markup Language","Hyper Text Multiple Language","Hyper Tool Multi Language"],"Hyper Text Markup Language"),
    new Question("What does CSS stand for? ", ["Common Style Sheet","Colorful Style Sheet","Computer Stylying Sheet","Cascading Style Sheet"],"Cascading Style Sheet"),
    new Question("What does DOM stand for?", ["Data over Modulation","Deployment of Modules","Document Object Model","Documentation of Models"],"Document Object Model"),
    new Question("Commonly used Data Types do NOT include:", ["Strings","Boolean","Alerts","Numbers"],"Alerts"),
    new Question("The condition of an if/else statement is enclosed with?", ["Square Brackets","Paranthesis","Curly Brackets","Quotes"],"Paranthesis"),
];

var quiz = new Quiz(questions);

populate();