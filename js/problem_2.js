const startButton = document.querySelector('#start-button');
const finishButton = document.querySelector('#finish-button');
const timeTakenOutput = document.querySelector('#time-taken')

timeTakenOutput.textContent = `(TODO)`;

// Write your code for problem 2 below

let interval;
let startTimer;
let endTimer;
let difference;


startButton.addEventListener('click', () => {
    startTimer = new Date().getTime();
    console.log(startTimer);

    interval = setInterval(() => {
        timeTakenOutput.textContent = new Date().getTime() - startTimer;
    }, 500)
})

finishButton.addEventListener('click', ()=> {

    clearInterval(interval);
})