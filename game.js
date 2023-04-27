const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Which of the following is a valid way to comment out a line of code in JavaScript?",
        choice1: "<!-- This is a comment -->",
        choice2: "* This is a comment *",
        choice3: "# This is a comment",
        choice4: "// This is a comment",
        answer: 4,
    },
    {
        question: "What is the purpose of the 'for' loop in JavaScript?",
        choice1: "To execute a block of code repeatedly",
        choice2: "To declare a variable",
        choice3: "To create an object",
        choice4: "To define a function",
        answer: 1,
    },
    {
        question: "What does the 'if' statement do in JavaScript?",
        choice1: "It defines a function",
        choice2: "It declares a variable",
        choice3: "It executes a block of code if a condition is true",
        choice4: "It compares the value and type of two variables",
        answer: 3,
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        choice1: "It concatenates two strings",
        choice2: "It compares the value and type of two variables",
        choice3: "It assigns a value to a variable",
        choice4: "It stops the execution of a function",
        answer: 2,
    },
    {
        question: "Which keyword is used to declare a function in JavaScript?",
        choice1: "fn",
        choice2: "def",
        choice3: "function",
        choice4: "func",
        answer: 3,
    }, 

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()