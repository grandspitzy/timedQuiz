var questions = [
    {
        question: "What year was Javascript created in?",
        choiceA: "1995",  
        choiceB: "1996", 
        choiceC: "2020", 
        choiceD: "2015", 
        correct:"A"
    }, {
        question: "How do you compare 2 variables to see if they are the same type and value",
        choiceA : "===",  
        choiceB : "=", 
        choiceC : "==", 
        choiceD : "!==", 
        correct : "A"
    },{
        question : "What do JS stand for?",
        choiceA : "Java Soup",  
        choiceB : "Jail Sentence", 
        choiceC : "JavaScript", 
        choiceD : "TypeScript", 
        correct : "C"
    },{
        question: "Who invented JavaScript?",
        choiceA : "Patrick Dempsey",  
        choiceB : "Brendan Eich", 
        choiceC : "Tupac", 
        choiceD : "Donald Trump", 
        correct : "B"
    },{
        question: "When would you use a for loop in JavaScript?",
        choiceA : "After compling",  
        choiceB : "When driving your Tesla", 
        choiceC : "When it is time to dance", 
        choiceD : "Do a specific block of code multiple times", 
        correct : "D"
    }

];

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var total = document.getElementById("score1");
var counter = document.getElementById("counter");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var output1 = document.getElementById("output1");
var timeEl = document.getElementById("timer");
var scoreBin = document.getElementById("scoreBin");
var leaderBoard = document.getElementById("leaderBoard");


//variables
var lastQuestion = questions.length-1;
var runningQuestion = 0;
var score = 0;
var negScore = 0;
var secondsLeft = 30;
var timerInterval;
var inputVal;

//render questions
function renderQuestion (){
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//start quiz
function startQuiz (){
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left"

        // timer runs out 
        if (secondsLeft <= 0) {
            clearInterval(timerInterval); 
            timeEl.style.display = "none";
            scoreRender();   
        };
    }, 1000);
   
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";  
    timeEl.style.display = "block";
}
function sendMessage() {
    timeEL.textContent = "Your time is up!";
};


//checkAnswer
function checkAnswer (answer) {
    if (answer == questions[runningQuestion].correct){
        score++;
    }else {
        secondsLeft = secondsLeft-10;
    }
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender(); //end quiz
        clearInterval(timerInterval); 
        timeEl.style.display = "none";
    }
}
function scoreRender (){
    quiz.style.display = "none";
    scoreBin.style.display = "block";
    score1.style.display = "inline-block";
   
    //add name and score to score div + add a div
    if (score >= 0){
    total.innerHTML = "<p>" + score + "</p>"; //edit to make it look better 
}   else {
    total.innerHTML = "<p>" +"0"+ "</p>"; //edit to make it look better 
}
}

start.addEventListener("click", startQuiz);

submitLeader.addEventListener("click", function(){
    score1.style.display = "none";
    scoreBin.style.display = "none";
    leaderBoard.style.display = "block";
    var inputVal = document.getElementById("leaderInitials").value;
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("name", JSON.stringify(inputVal));
    leaderScore.innerHTML = JSON.parse(localStorage.getItem("score"));
    leaderName.innerHTML = JSON.parse(localStorage.getItem("name"));

});


