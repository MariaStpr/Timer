'use sctrict'

const titleDate = document.querySelector('#title-date'); //Заголовок
const date = document.querySelector('#date'); //Дата
const startBtn = document.querySelector('#btn'); //Кнопка "начать"
const resetBtn = document.querySelector('.btn-reset'); //Кнопка "начать"
const titleComplete = document.querySelector('.complete');
const time = document.querySelector('.numbers');
let timerId = null;

let futureTime = '';


function roundTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

function startDate() {
    futureTime = new Date(date.value);
    
    //Получить нынешние время и дату
    const now = new Date();

    //получить разницу между введенной датой и настоящей
    let diff = futureTime.getTime() - now.getTime();

    let seconds = Math.floor((diff/1000)%60);
    let minutes = Math.floor((diff/(1000*60))%60);
    let hours = Math.floor((diff/(1000*60*60))%24);
    let days = Math.floor(diff/(1000*60*60*24));


    if (futureTime !== '') {
        if (diff <= 0) {
            titleComplete.classList.remove('hide');
            titleComplete.textContent = `${titleDate.value} завершился ${roundTime(futureTime.getDate())}:${roundTime(futureTime.getMonth()+1)}:${roundTime(futureTime.getFullYear())}`;
            clearInterval(timerId);
            return;
        }
        time.textContent = `${roundTime(days)}:${roundTime(hours)}:${roundTime(minutes)}:${roundTime(seconds)}`;

        //перенести заголовок и разницу во времени в окно с таймером
        document.querySelector('h1').textContent = titleDate.value;
        //отобразить окно с таймером
        document.querySelector('.input').classList.add('hide');
        document.querySelector('.output').classList.remove('hide');
        resetBtn.classList.remove('hide');
        startBtn.classList.add('hide');
    } else {
        alert('Пожалуйста, введите дату');
    }
}

//При клике на startBtn
startBtn.addEventListener('click', () => {
    startDate();
    //менять время на таймере с периодичностью в 1сек.
    timerId = setInterval(startDate, 1000);
});