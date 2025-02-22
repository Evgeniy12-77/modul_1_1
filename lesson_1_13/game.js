/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
'use strict';

window.RPS = (() => {
  let userScore = 0;
  let computerScore = 0;
  let language = 'ru'; // Язык по умолчанию

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getComputerChoice() {
    const choices = language === 'ru' ? ['камень', 'ножницы', 'бумага'] : ['rock', 'scissors', 'paper'];
    return choices[getRandomIntInclusive(0, choices.length - 1)];
  }

  function getPlayerChoice() {
    const message = language === 'ru' 
      ? 'Выберите: камень, ножницы или бумагу' 
      : 'Choose: rock, paper or scissors';
    
    const choice = prompt(message);
    if (choice === null) { // Проверяем, нажал ли игрок "Отмена"
      showScores(); // Показываем счет
      return null; // Возвращаем null, чтобы выйти из игры
    }
    return choice.toLowerCase();
  }

  function playRound(playerChoice, computerChoice) {
    const resultMessage = `Вы выбрали ${playerChoice}, а компьютер выбрал ${computerChoice}.`;
    
    if (playerChoice === computerChoice) {
      alert(language === 'ru' ? 'Ничья!' : 'It’s a tie!');
    } else if (
      (language === 'ru' && (playerChoice === 'камень' && computerChoice === 'ножницы' || 
                             playerChoice === 'ножницы' && computerChoice === 'бумага' || 
                             playerChoice === 'бумага' && computerChoice === 'камень')) ||
      (language === 'en' && (playerChoice === 'rock' && computerChoice === 'scissors' || 
                             playerChoice === 'scissors' && computerChoice === 'paper' || 
                             playerChoice === 'paper' && computerChoice === 'rock'))
    ) {
      userScore++;
      alert(`${language === 'ru' ? 'Вы выиграли!' : 'You won!'} ${resultMessage}`);
    } else {
      computerScore++;
      alert(`${language === 'ru' ? 'Вы проиграли!' : 'You lost!'} ${resultMessage}`);
    }
  }

  function showScores() {
    alert(language === 'ru' 
      ? `Итоговый счет: Игрок - ${userScore}, Компьютер - ${computerScore}` 
      : `Final score: Player - ${userScore}, Computer - ${computerScore}`);
  }

  function startGame() {
    const userChoice = getPlayerChoice();
    if (userChoice === null) {
      return; // Просто выходим из функции, счет уже показан
    }
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    startGame(); // Запускаем игру снова
  }

  return {
    start() {
      const langChoice = prompt('Выберите язык / Choose language (ru/en):').toLowerCase();
      language = (langChoice === 'en') ? 'en' : 'ru'; // Устанавливаем язык
      console.log(language === 'ru' ? 'Игра началась!' : 'Game started!');
      startGame();
    },
  };
})();
