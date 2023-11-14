var startBtn= document.getElementById ("start-btn")
var introSectionEl= document.getElementById("intro-section")
var timerEl= document.getElementById("timer")
var questions= document.getElementById("question-section")
var timeEl= document.getElementById('title')

var questionsArray= [
    {
        title: "q 1",
        choices: ["c1","c2", "c3", "c4"],
        answer: "c2"
    },
    {
        title: "q 2",
        choices: ["c1","c2", "c3", "c4"],
        answer: "c1"
    },
    {
        title: "q 3",
        choices: ["c1","c2", "c3", "c4"],
        answer: "c3"
    },
    {
        title: "q 4",
        choices: ["c1","c2", "c3", "c4"],
        answer: "c4"
    },
    {
        title: "q 5",
        choices: ["c1","c2", "c3", "c4"],
        answer: "c1"
    }
]

function startQuiz(){
introSectionEl.classList.add("hide")
}

startBtn.addEventListener("click", startQuiz)