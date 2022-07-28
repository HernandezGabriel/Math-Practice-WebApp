document.addEventListener('DOMContentLoaded', () => {
    problemCount();
    showProblem();
});

function randomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function randomAnswers(correctAnswer){
    let section = document.getElementById("answers");
    let ul = section.querySelector("ul");
    let list = ul.querySelectorAll("li");
    let correctSpot = Math.floor(Math.random() * Math.floor(4))
    list.forEach((x)=>{
       x.innerText = Math.floor(Math.random() * Math.floor(82)).toString();
    }); 
    list[correctSpot].innerText = correctAnswer;
    list.forEach((x) =>{
        x.addEventListener('click',() => {
            checkAnswer(x,correctAnswer);
           });
    });
}

function showProblem(){
    let left = randomNumber(10);
    let right = randomNumber(10);
    let expression = document.querySelector(".expression");
    expression.innerText = left.toString() + "*" + right.toString();
    randomAnswers(left * right);
    
}

function checkAnswer(selection, correctAnswer){
    if(parseInt(selection.innerText) == correctAnswer){
        addCount();
    }
    showProblem();
}

function problemCount(){
    let section = document.getElementById("answers");
    let ul = section.querySelector("ul");
    let list = ul.querySelectorAll("li");
    let currProblem = document.querySelector(".currentProblem");
    let problemNumber = parseInt(currProblem.innerText);
    list.forEach((x)=>{
        x.addEventListener('click',() => {
            problemNumber++;
    currProblem.innerText = problemNumber;
    if(problemNumber == 10){
        showSummary();
    }
           });
    });
}

function addCount(){
    let currScore = document.querySelector(".currentScore");
    let problemScore = parseInt(currScore.innerText);
    problemScore++;
    currScore.innerText = problemScore;
}

function showSummary(){
}
