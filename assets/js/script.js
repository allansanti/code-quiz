var startBtn= document.getElementById("start-btn")
var introSectionEl= document.getElementById("intro-section")
var timerEl= document.getElementById('timer')
var questionSectionEl= document.getElementById("question-section")
var titleEl= document.getElementById('title')
var choicesEl= document.querySelectorAll(".choices")
var questionIndex= 0

var questionsArray= [
    {
        title: "What does HTML stand for?",
        choices: ["HyperText Maxing Language","HyperText Markup Language", "HyperText Masking Language", "HyperText Marking Language"],
        answer: "HyperText Markup Language"
    },
    {
        title: "What is CSS?",
        choices: ["Cascading Style Sheets","Cascading Storing Sheets", "Cascading Super Saiyan", "Costco Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "Who is the best Coding Instructor?",
        choices: ["Santa","Elon Musk", "Phillip Loy", "Internet"],
        answer: "Phillip Loy"
    },
    {
        title: "What is the most important heading element? ",
        choices: ["h2","h6", "p1", "h1"],
        answer: "h1"
    },
    {
        title: "What tag should be at the end of your javascript?",
        choices: ["</script>","</body>", "<header>", "<var>"],
        answer: "</script>"
    }
]
var timeLeft= questionsArray.length*15

setIntervalId=0;

function startQuiz(){
    introSectionEl.setAttribute("class", "hide")
    questionSectionEl.setAttribute("class", "")
    setIntervalId= setInterval(countDown, 1000)
    showQuestions()
}

function countDown(){
    timerEl.textContent= timeLeft--
        if(timeLeft===0){
            clearInterval(setIntervalId)
        }
}

function showQuestions(){
    titleEl.textContent=questionsArray[questionIndex].title

    choicesEl[0].textContent=questionsArray[questionIndex].choices[0]
    choicesEl[1].textContent=questionsArray[questionIndex].choices[1]
    choicesEl[2].textContent=questionsArray[questionIndex].choices[2]
    choicesEl[3].textContent=questionsArray[questionIndex].choices[3]
}

function nextQuestion(event){
    var currentElement= event.target
    if(currentElement.matches("button")){
        questionIndex++
        showQuestions()
    }
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion)