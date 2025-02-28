const answerOptions = document.querySelector(".answers");
const nextQuestion = document.querySelector(".next-btn");
const questionStatus = document.querySelector(".q-status");
const timerDisplay = document.querySelector(".time");
const resultCon = document.querySelector(".result-container");
const quizCon = document.querySelector(".quiz-container");
const appCon = document.querySelector(".app-container");


let quizCategory = "javascript";
let currentQuestion = null;
const qIndexHistory = [];
let numbQuestion = 5;
const TIME_LIMIT = 10;
let currentTime = TIME_LIMIT;
let timer = null;
let correctCount = 0;

const showResult = () =>{
    quizCon.style.display = "none";
    resultCon.style.display = "block";

    const resultText = `You got <b>${correctCount}</b> of <b>${numbQuestion}</b>
        questions correct,`;
    document.querySelector(".result-msg").innerHTML = resultText;

}

const resetTimer = () =>{
    clearInterval(timer);
    currentTime = TIME_LIMIT
    timerDisplay.textContent = `${currentTime}s`;

}

const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <= 0){
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestion.style.visibility="visible";
            quizCon.querySelector(".q-timer").style.background = "#c31402";

            answerOptions.querySelectorAll(".a-option").forEach(option => option.style.pointerEvents="none");
            
        }
    }, 1000);
}

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    if(qIndexHistory.length >= Math.min(categoryQuestions.length,numbQuestion)){
        return showResult();
    }

    //filter de frågor som inte är valda 
    const avaiQuestions = categoryQuestions.filter((_,index)=> !qIndexHistory.includes(index));

    const randomQuestion = avaiQuestions[Math.floor(Math.random() * avaiQuestions.length)];

    qIndexHistory.push(categoryQuestions.indexOf(randomQuestion));

    return randomQuestion;
    
}

const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".a-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class = "material-icons">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

const handleAnswer = (option,ansIndex) =>{
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === ansIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

    !isCorrect ? highlightCorrectAnswer() : correctCount++;

    const iconHTML = `<span class = "material-icons">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    answerOptions.querySelectorAll(".a-option").forEach(option => option.style.pointerEvents="none");
    nextQuestion.style.visibility="visible";
} 

const renderQuestion =() => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;
    
    resetTimer();
    startTimer();

    answerOptions.innerHTML = "";
    nextQuestion.style.visibility="hidden";
    quizCon.querySelector(".q-timer").style.background = "#32313c";
    document.querySelector(".q-question").textContent= currentQuestion.question;
    questionStatus.innerHTML = `<b>${qIndexHistory.length}</b> of <b>${numbQuestion}</b> Questions`

    currentQuestion.options.forEach((option ,index) => {
        const li = document.createElement("li");
        li.classList.add("a-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li,index));
    });
}

const startQuiz = () =>{
    appCon.style.display = "none";
    quizCon.style.display = "block";
    qIndexHistory.length =0;

    quizCategory = appCon.querySelector(".category-btn.active").textContent;
    numbQuestion = parseInt(appCon.querySelector(".no-q.active").textContent);

    renderQuestion();
}

document.querySelectorAll(".category-btn, .no-q").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    })
})

const restQuiz = () =>{
    resetTimer();
    correctCount = 0;
    qIndexHistory.length=0;
    appCon.style.display = "block";
    resultCon.style.display = "none";
}

renderQuestion();
nextQuestion.addEventListener("click", renderQuestion);
document.querySelector(".try-again").addEventListener("click", restQuiz);
document.querySelector(".start-btn").addEventListener("click", startQuiz);