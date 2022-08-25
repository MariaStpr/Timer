'use strict'

let titleDate = document.querySelector('#title-date'); //Заголовок
let date = document.querySelector('#date'); //Дата
const startBtn = document.querySelector('#btn'); //Кнопка "начать"
const resetBtn = document.querySelector('.btn-reset'); //Кнопка "сбросить"
let titleComplete = document.querySelector('.complete');
let time = document.querySelector('.numbers');

let futureTime = '';
let timerId;


function roundTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

function countDiff() {
    const now = new Date().getTime();
    let diff = new Date(futureTime).getTime() - now;
    
    if (diff < 0) {
        
        document.querySelector('.output').classList.add('hide');
        titleComplete.classList.remove('hide');

        clearInterval(timerId);

        titleComplete.textContent = `${titleDate.value} завершился ${futureTime}`;
    
        return;
    }
    
    let seconds = Math.floor((diff/1000)%60);
    let minutes = Math.floor((diff/(1000*60))%60);
    let hours = Math.floor((diff/(1000*60*60))%24);
    let days = Math.floor(diff/(1000*60*60*24));

    time.textContent = `${roundTime(days)}:${roundTime(hours)}:${roundTime(minutes)}:${roundTime(seconds)}`;
}
    
function startDate() {
    futureTime = date.value;

    if (futureTime === '') {
        alert('Пожалуйста, введите дату');
        return;
    } else if (isNaN(Date.parse(futureTime))) { //валидность даты
        alert('Введите корректную дату');
        return;
    }

    //перенести заголовок и разницу во времени в окно с таймером
    document.querySelector('h1').textContent = titleDate.value;

    localStorage.setItem('title', titleDate.value);
    localStorage.setItem('date', date.value);

    showNextView();
}

function showNextView() {
    //отобразить окно с таймером
    document.querySelector('.input').classList.add('hide');
    document.querySelector('.output').classList.remove('hide');
    resetBtn.classList.remove('hide');
    startBtn.classList.add('hide');

    countDiff();
    timerId = setInterval(countDiff, 1000);
}

function clear() {
    document.querySelector('h1').textContent = 'Создать новый таймер обратного отсчета';    
    titleDate.value = '';
    date.value = '';

    document.querySelector('.input').classList.remove('hide');
    document.querySelector('.output').classList.add('hide');
    resetBtn.classList.add('hide');
    startBtn.classList.remove('hide');
    titleComplete.classList.add('hide');

    clearInterval(timerId);

    localStorage.removeItem("title");
    localStorage.removeItem("date");
}

function local() {
    const titleTimer = localStorage.getItem('title');
    const dateTimer = localStorage.getItem('date');

    if (!(titleTimer && dateTimer)) {
        return;
    }

    document.querySelector('h1').textContent = titleTimer;
    futureTime = dateTimer;

    showNextView();
}

//При клике на startBtn
startBtn.addEventListener('click', startDate);

resetBtn.addEventListener('click', clear);

local();