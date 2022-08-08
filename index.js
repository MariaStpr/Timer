'use sctrict'

const titleDate = document.querySelector('#title-date'); //Заголовок
const date = document.querySelector('#date'); //Дата
const startBtn = document.querySelector('#btn'); //Кнопка "начать"
const resetBtn = document.querySelector('.btn-reset'); //Кнопка "начать"
let futureTime = '';

//Получить нынешние время и дату

function startDate(){
    futureTime = date.value;
    if (futureTime !== '') {
        document.querySelector('h1').textContent = titleDate.value;
        console.log(futureTime);

        document.querySelector('.input').classList.add('hide');
        document.querySelector('.output').classList.remove('hide');
        resetBtn.classList.remove('hide');
        startBtn.classList.add('hide');
    } else {
        alert('Пожалуйста, введите дату');
    }
}

//При клике на startBtn
//получить разницу между введенной датой и настоящей
//перенести заголовок и разницу во времени в окно с таймером
//отобразить окно с таймером
//менять время на таймере с периодичностью в 1сек.
startBtn.addEventListener('click', startDate);