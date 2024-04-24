const starBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSelection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const refazerBtn = document.querySelector('.refazer-btn');

starBtn.onclick = () => {//ativa o botão para ser usado com outras classes
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {//desativa a classe acima do botao 
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {//desativa a classe acima do botao 
    quizSelection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questCounter(1);
    userScore();

}

refazerBtn.onclick = () => {//desativa a classe acima do botao 
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    quesCount = 0;
    quesNumb = 1;
    userScore = 0;
    showQuestions(quesCount);
    questCounter(quesNumb);

    headerScore();
}



let quesCount = 0;
let quesNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {//Proxima questão
    if (quesCount < questions.length - 1) {
        quesCount++;
        showQuestions(quesCount);

        quesNumb++;
        questCounter(quesNumb);

        nextBtn.classList.remove('active');

    } else {
        showResultBox();
    }

}

const optionList = document.querySelector('.option-list');

optionList.onclick = () => {//Selecionar a opção

}

//Recebendo as questôes e opções em array

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[quesCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();

    } else {
        answer.classList.add('incorrect');

        //if answer is incorrect then automatically selected the correct answer

        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }


    }

    //if user selected other option then disabled all options

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questCounter(index) {
    const questTotal = document.querySelector('.question-total');
    questTotal.textContent = `${index} de ${questions.length} Questôes`;
}

function headerScore() {

    const headerScore = document.querySelector('.header-score');
    headerScore.textContent = `Pontos: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = resultBox.querySelector('.score-text');
    scoreText.textContent = `Você acertou ${userScore} de ${questions.length}`;

    const circuloProgress = document.querySelector('.circulo-progress');
    const progressValue = document.querySelector('.progress-value');

    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circuloProgress.style.background = `conic-gradient(#996935 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if(progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
       
    }, speed);
}