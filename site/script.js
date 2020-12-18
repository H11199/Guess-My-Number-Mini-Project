'use strict';
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const printmessage = function (text) {
  document.querySelector('.message').textContent = text;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input from user
  if (!guess) {
    printmessage('⛔ Please Enter Some Number!');

    // if player wins
  } else if (guess === Secretnumber) {
    printmessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = Secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //if guess is too high
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > Secretnumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      printmessage('😞 You Lost!');
      document.querySelector('.score').textContent = score;
    }
  }
  /*else if (guess > Secretnumber) {
    if (score > 1) {
      printmessage('📈 Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      printmessage('😞 You Lost!');
    }
    document.querySelector('.score').textContent = score;

    // if guess is too low
  } else if (guess < Secretnumber) {
    if (score > 1) {
      printmessage('📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      printmessage('😞 You Lost!');
    }
  }*/
});

//click again
document.querySelector('.again').addEventListener('click', function () {
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  printmessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
