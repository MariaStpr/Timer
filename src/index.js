import Timer from './class.js';
import '../style.css';

const titleDate = document.querySelector('#title-date'); // Заголовок
const date = document.querySelector('#date'); // Дата
const startBtn = document.querySelector('#btn'); // Кнопка "начать"
const resetBtn = document.querySelector('.btn-reset'); // Кнопка "сбросить"
const titleComplete = document.querySelector('.complete');
const time = document.querySelector('.numbers');
const timerTitle = document.querySelector('h1');
const timerInput = document.querySelector('.input');
const timerOutput = document.querySelector('.output');

let futureTime = '';
let timer;

function showFinishMessage(dateEnd) {
  titleComplete.classList.remove('hide');
  titleComplete.textContent = `${titleDate.value} завершился ${dateEnd}`;
}

function showNextView() {
  // отобразить окно с таймером
  timerInput.classList.add('hide');
  timerOutput.classList.remove('hide');
  resetBtn.classList.remove('hide');
  startBtn.classList.add('hide');
}

function startDate() {
  timer = new Timer(date.value, time, showFinishMessage);
  timer.callCountDiff();

  futureTime = date.value;

  if (futureTime === '') {
    alert('Пожалуйста, введите дату');
    return;
  }
  if ((Date.parse(futureTime).isNaN)) { // валидность даты
    alert('Введите корректную дату');
    return;
  }

  // перенести заголовок и разницу во времени в окно с таймером
  timerTitle.textContent = titleDate.value;

  localStorage.setItem('title', titleDate.value);
  localStorage.setItem('date', date.value);

  showNextView();
}

function clear() {
  timerTitle.textContent = 'Создать новый таймер обратного отсчета';
  titleDate.value = '';
  date.value = '';

  timerInput.classList.remove('hide');
  timerOutput.classList.add('hide');
  resetBtn.classList.add('hide');
  startBtn.classList.remove('hide');
  titleComplete.classList.add('hide');

  timer.clearInterval();

  localStorage.removeItem('title');
  localStorage.removeItem('date');
}

function local() {
  const titleTimer = localStorage.getItem('title');
  const dateTimer = localStorage.getItem('date');

  if (!(titleTimer && dateTimer)) {
    return;
  }

  timer = new Timer(dateTimer, time, showFinishMessage);
  timer.callCountDiff();

  timerTitle.textContent = titleTimer;

  showNextView();
}

// При клике на startBtn
startBtn.addEventListener('click', startDate);

resetBtn.addEventListener('click', clear);

local();
