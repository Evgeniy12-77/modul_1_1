"use strict";

const RPSAndMarbles = (() => {
  let userScore = 0;
  let computerScore = 0;
  let language = 'ru'; // Язык по умолчанию
  const marbls = { player: 5, bot: 5 }; // Начальное количество шариков у игрока и бота

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
    const message = language === 'ru' ? 'Выберите: камень, ножницы или бумагу' : 'Choose: rock, paper or scissors';
    const choice = prompt(message);
    if (choice === null) {
      showScores();
      return null; // Возвращаем null, чтобы выйти из игры
    }
    return choice.toLowerCase();
  }

  function playRound(playerChoice, computerChoice) {
    const resultMessage = `Вы выбрали ${playerChoice}, а компьютер выбрал ${computerChoice}.`;
    if (playerChoice === computerChoice) {
      alert(language === 'ru' ? 'Ничья!' : 'It’s a tie!');
      return null; // Ничья, нет победителя
    } else if (
      (language === 'ru' && ((playerChoice === 'камень' && computerChoice === 'ножницы') || (playerChoice === 'ножницы' && computerChoice === 'бумага') || (playerChoice === 'бумага' && computerChoice === 'камень'))) ||
      (language === 'en' && ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')))
    ) {
      userScore++;
      alert(`${language === 'ru' ? 'Вы выиграли!' : 'You won!'} ${resultMessage}`);
      return 'player'; // Игрок выиграл
    } else {
      computerScore++;
      alert(`${language === 'ru' ? 'Вы проиграли!' : 'You lost!'} ${resultMessage}`);
      return 'computer'; // Компьютер выиграл
    }
  }

  function showScores() {
    alert(language === 'ru' ? `Итоговый счет: Игрок - ${userScore}, Компьютер - ${computerScore}` : `Final score: Player - ${userScore}, Computer - ${computerScore}`);
  }

  function startRPSGame() {
    const userChoice = getPlayerChoice();
    if (userChoice === null) return; // Просто выходим, если отмена
    const computerChoice = getComputerChoice();
    return playRound(userChoice, computerChoice);
  }

  // Функция для генерации ввода игрока при ставке в игре с шариками
  function generationPlayer() {
    const playerRandom = prompt(`Введите количество шариков от 1 до ${marbls.player}`);
    
    if (
      playerRandom === null ||
      isNaN(playerRandom) ||
      playerRandom < 1 ||
      playerRandom > marbls.player
    ) {
      alert(`Ошибка ввода! Пожалуйста, введите число от 1 до ${marbls.player}.`);
      return generationPlayer(); // Рекурсивный вызов для повторного запроса
    }
    return +playerRandom; // Возвращаем корректное значение
  }

  // Функция для генерации строки четности/нечетности
  const getRandomEvenOrOdd = () => {
    const words = ["четное", "нечетное"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]; // Возвращаем случайное слово из массива
  };

  // Функция для проверки состояния игры
  const zeroRender = () => {
    if (marbls.bot <= 0) {
      alert("Игра окончена, вы выиграли!");
      return true; // Возвращаем true, если игра окончена
    }
    if (marbls.player <= 0) {
      alert("Игра окончена, вы проиграли!");
      return true; // Возвращаем true, если игра окончена
    }
    return false; // Игра ещё не завершена
  };

  // Функция для основной логики игры со шариками
  function renderMarbleGame(firstTurn) {
    if (zeroRender()) return; // Проверка окончания игры
    
    // Ход игрока: ввод количества шариков
    const playerEvenCount = generationPlayer();
    const randomWorld = getRandomEvenOrOdd();

    // Логика, когда игрок делает ставку
    if (
      (playerEvenCount % 2 === 0 && randomWorld === "четное") ||
      (playerEvenCount % 2 !== 0 && randomWorld === "нечетное")
    ) {
      marbls.player -= playerEvenCount;
      marbls.bot += playerEvenCount;
      alert(`Бот угадал, у Вас число ${randomWorld}. У вас осталось ${marbls.player}, у бота осталось ${marbls.bot}.`);
    } else {
      marbls.player += playerEvenCount;
      marbls.bot -= playerEvenCount;
      alert(`Бот не угадал, у Вас число ${randomWorld}. У вас осталось ${marbls.player}, у бота осталось ${marbls.bot}.`);
    }

    // Проверяем состояние игры после хода игрока
    if (zeroRender()) return;

    // Ход бота: бот загадывает случайное количество шариков
    const botRandomCount = getRandomIntInclusive(1, marbls.bot); // Бот загадывает от 1 до количества своих шариков
    const playerGuess = prompt(`Бот загадал число. Угадайте четное или нечетное? (введите "четное" или "нечетное")`).toLowerCase();
    alert(`Бот загадал ${botRandomCount}.`);

    // Логика, когда бот делает ставку
    if (
      (botRandomCount % 2 === 0 && playerGuess === "четное") ||
      (botRandomCount % 2 !== 0 && playerGuess === "нечетное")
    ) {
      marbls.bot -= botRandomCount;
      marbls.player += botRandomCount;
      alert(`Вы угадали, у бота число ${botRandomCount}. У вас осталось ${marbls.player}, у бота осталось ${marbls.bot}.`);
    } else {
      marbls.bot += botRandomCount;
      marbls.player -= botRandomCount;
      alert(`Вы не угадали, у бота число ${botRandomCount}. У вас осталось ${marbls.player}, у бота осталось ${marbls.bot}.`);
    }

    // Проверяем состояние игры после хода бота
    if (zeroRender()) return;

    renderMarbleGame(firstTurn); // Запускаем следующий раунд игры
  }

  function startGame() {
    const winner = startRPSGame();
    if (winner) {
      const firstTurn = winner === 'player'; // Игрок начинает, если он выиграл
      alert(firstTurn ? "Вы начинаете загадывать число." : "Бот начинает загадывать число.");
      renderMarbleGame(firstTurn); // Переход к игре со шариками
    } else {
      startGame(); // Если ничья, перезапускаем игру
    }
  }

  function promptToRestart() {
    const restart = confirm(language === 'ru' ? "Хотите сыграть еще?" : "Do you want to play again?");
    if (restart) {
      userScore = 0; // Сбросим счет
      computerScore = 0; // Сбросим счет компьютера
      marbls.player = 5; // Начальные шарики игрока
      marbls.bot = 5; // Начальные шарики бота
      startGame(); // Запуск новой игры
    } else {
      showScores(); // Показываем окончательный счет
    }
  }

  return {
    start() {
      const langChoice = prompt('Выберите язык / Choose language (ru/en):').toLowerCase();
      language = langChoice === 'en' ? 'en' : 'ru'; // Устанавливаем язык
      console.log(language === 'ru' ? 'Игра началась!' : 'Game started!');
      startGame();
      promptToRestart(); // Запрос на перезапуск игры
    },
  };
})();

