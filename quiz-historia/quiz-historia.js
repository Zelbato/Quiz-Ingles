const starBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSelection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

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
}

let questionCount = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {//Proxima questão
    questionCount++;
    showQuestions(questionCount);


    showQuestions(0);
}

//Recebendo as questôes e opções em array

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent =  `${questions[index].numb}. ${questions[index].question}`;
}