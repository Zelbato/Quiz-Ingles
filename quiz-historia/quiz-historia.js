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
}