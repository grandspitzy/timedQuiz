var questions = [
    {
        question: "What year was Javascript created in?",
        choiceA: "1995",  
        choiceB: "1996", 
        choiceC: "2020", 
        choiceD: "2015", 
        correct:"a"
    }, {
        question: "How do you compare 2 variables to see if they are the same type and value",
        choiceA : "===",  
        choiceB : "=", 
        choiceC : "==", 
        choiceD : "!==", 
        correct : "a"
    },{
        question : "What do JS stand for?",
        choiceA : "Java Soup",  
        choiceB : "Jail Sentence", 
        choiceC : "JavaScript", 
        choiceD : "TypeScript", 
        correct : "c"
    },{
        question: "Who invented JavaScript?",
        choiceA : "Patrick Dempsey",  
        choiceB : "Brendan Eich", 
        choiceC : "Tupac", 
        choiceD : "Donal Trump", 
        correct : "b"
    },{
        question: "When would you use a for loop in JavaScript?",
        choiceA : "After compling",  
        choiceB : "When driving your Tesla", 
        choiceC : "When it is time to dance", 
        choiceD : "Do a specfic block of code multiple times", 
        correct : "d"
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
var output1 = document.getElementById("output");

//variables
var lastQuestion = questions.length-1;
var runningQuestion = 0;
var score = 0;

function renderQuestion (){
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
start.addEventListener("click", startQuiz);

//start quiz
function startQuiz (){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";  
}
//checkAnswer
function checkAnswer (answer) {
    if (answer == questions[runningQuestion].correct){
        score++;
    } else{   
        score--;      
    }
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender(); //end quiz
    }
}

function scoreRender (){
    quiz.style.display = "none";
    score1.style.display = "block";
    //add name and score to score div + add a div
    total.innerHTML = "<p>" + score + "</p>"; //edit to make it look better
    
}





