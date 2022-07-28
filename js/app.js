document.addEventListener('DOMContentLoaded', () => {
    scoreCount();
    problemCount();
    showProblem();
    let section = document.getElementById("answers");
    let ul = section.querySelector("ul");
    let list = ul.querySelectorAll("li");
    list.forEach((x)=>{
        x.addEventListener('click',() => {
            showProblem();
        });
    });
    let startOver = document.getElementById("btnStartOver")
    startOver.addEventListener('click',()=>{
        document.location.reload();
    })
});

let globalCorrectAnswer;

function randomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function randomAnswers(){
    let section = document.getElementById("answers");
    let ul = section.querySelector("ul");
    let list = ul.querySelectorAll("li");
    let correctSpot = Math.floor(Math.random() * Math.floor(4))
    list.forEach((x)=>{
       x.innerText = Math.floor(Math.random() * Math.floor(82)).toString();
    }); 
    list[correctSpot].innerText = globalCorrectAnswer;
}

function showProblem(){
    let left = randomNumber(10);
    let right = randomNumber(10);
    let expression = document.querySelector(".expression");
    expression.innerText = left.toString() + "*" + right.toString();
    globalCorrectAnswer = (left * right);
    randomAnswers();
    
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
        if(problemNumber == 11){
            showSummary();
        }else{
            currProblem.innerText = problemNumber;
        }
        });
    });
}

function scoreCount(){
    let section = document.getElementById("answers");
    let ul = section.querySelector("ul");
    let list = ul.querySelectorAll("li");
    let currScore = document.querySelector(".currentScore");
    let problemScore = parseInt(currScore.innerText);
    list.forEach((x)=>{
        x.addEventListener('click',() => {
            if(parseInt(x.innerText)==globalCorrectAnswer){
                problemScore++;
                currScore.innerText = problemScore;
            }
           });
    });
}

function showSummary(){
    let finale = document.querySelectorAll(".show-hide")
    finale.forEach((x)=> {
        x.style.visibility = "hidden";
    });
}