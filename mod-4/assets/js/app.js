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
            var id = "btn"+i
        };
        
        var button = document.getElementById(id); 
        button.oneclick = function() {
            this.questionIndex++;
            quiz.guess(guess);
            populate()
        };
    };
};
// function populateAgain() {
//     if(quiz.isEnded() ) {
//         showScores()
//     }
//     else {
//         //shows the  question
//         var questionTitle = document.querySelector("#question-title");
//         questionTitle.innerHTML = quiz.getQuestionIndex().text;

//         //show choices
//         var choices = quiz.getQuestionIndex().choices;
//         for(var i = 0; i< choices.length; i++){
//             var choiceE1 =  document.getElementById("choice"+i);
//             choiceE1.innerHTML = choices[i];
//         };
//     }
// };
function guess(id, guess) {
    var button 
    
};
function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
    var gmE1 = document.getElementById("wQuiz")
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