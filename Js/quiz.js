window.onload = init
var score = 0
var allQuestion
function init(e) {
    allQuestion = js_question
    document.querySelector(".finish-quiz").addEventListener('click', finishQuiz)
    setQuestion()
}

function setQuestion() {
    let question = Object.entries(allQuestion)
    for(let i = 0; i< 5; i++) {
        let question_ID = getRandomNumber(question.length)
        getQuestion(question[question_ID][1], question[question_ID][0])
        question.splice(question_ID, 1)
    }
}

function finishQuiz(event) {
    const questions = document.querySelectorAll(".quiz-container .question-list")
    questions.forEach(verifyAnswer)
    document.querySelector('.score').innerText = "score: " + score
    document.querySelector('.score').style.display = "block" 
    document.querySelector('.home-btn').style.display = "block" 
    document.querySelector('.finish-quiz').style.display = "none" 
}

function verifyAnswer(question) {
    const qID = question.dataset.qId
    const selectedOption = document.querySelector(`input[name="${qID}"]:checked`)
    const selectedAnswer = selectedOption?.value
    const correctAnswer = allQuestion[qID].answer
    if(selectedAnswer == correctAnswer) {
        selectedOption.nextElementSibling.style.backgroundColor = "#00ff00"
        score++
    }
    else {
        if(selectedOption) selectedOption.nextElementSibling.style.backgroundColor = "#ff0000"
        const result = document.createElement('div')
        result.className = 'result'
        question.append(result)
        const answer = document.createElement('p')
        answer.innerText = correctAnswer
        result.append(answer)
    }
}

function getQuestion(question, qID) {
    let question_div = document.createElement('div')
    question_div.dataset.qId = qID
    question_div.className = 'question-list'

    let question_para = document.createElement('p')
    question_para.className = 'question'
    question_para.innerText = question.question
    question_div.append(question_para);

    let option_div = document.createElement('div')
    option_div.className = 'option';
    question_div.append(option_div)

    let option_ul = document.createElement('ul')
    option_div.append(option_ul)

    question.options.forEach((option, index) => {
        let option_li = document.createElement('li')
        option_ul.append(option_li)
        
        let option_input = document.createElement('input')
        option_input.type = 'radio'
        option_input.id = qID + index;
        option_input.value = option
        option_input.name = qID
        option_li.append(option_input)

        let option_label = document.createElement('label')
        option_label.setAttribute('for', qID + index)
        option_label.innerText = option
        option_li.append(option_label)
    });

    document.querySelector(".quiz-container").append(question_div)
}

function getRandomNumber(n = 10) {
    return Math.floor(Math.random() * n)
}