'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'Too high';
        }else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lost the game';
        }
    } else if (guess < secretNumber) {
        if (score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'Too low';
        }else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lost the game';
        }
    }
});

document.querySelector('.again').addEventListener('click', function (){
    const bgColor = '#222';
    const Width = '15rem';
    const message = 'Start guessing...';
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = message;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = bgColor;
    document.querySelector('.number').style.width = Width;
});
