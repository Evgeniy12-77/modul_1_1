'use strict';

const startAdvancedGame = () => {
  const min = parseInt(prompt('Введите минимальное число диапазона:'));
  const max = parseInt(prompt('Введите максимальное число диапазона:'));

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert('Введи корректные числа.');
    return;
  }

  const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const attemptsAllowed = Math.ceil((max - min + 1) * 0.3);
  const userGuesses = [];

  // Рекурсивная функция для обработки попыток
  const guessNumber = (attempts) => {
    if (attempts === attemptsAllowed) {
      alert(
        `Вы исчерпали все попытки. Игра окончена. 
        Загаданное число было ${secretNumber}`);
      return;
    }

    let guessedNumber = prompt(
      `Введите ваше число от ${min} до ${max} (осталось попыток: ${
        attemptsAllowed - attempts
      }):`
    );

    if (guessedNumber === null) {
      alert('Игра окончена.');
      return;
    }

    guessedNumber = Number(guessedNumber);

    if (isNaN(guessedNumber)) {
      alert('Введи число!');
      guessNumber(attempts);
      // просьба ввести корректное число без увеличения счётчика попыток
      return;
    }

    if (userGuesses.includes(guessedNumber)) {
      alert('Вы уже вводили это число! Попробуйте другое.');
      guessNumber(attempts); // просим ввести новое число без 
      // увеличения счётчика попыток
      return;
    }

    // Добавление введенного числа в массив
    userGuesses.push(guessedNumber);
    console.log(`Ваши попытки: ${userGuesses}`);

    if (guessedNumber > secretNumber) {
      alert('Меньше!');
    } else if (guessedNumber < secretNumber) {
      alert('Больше!');
    } else {
      alert('Правильно! Вы угадали число.');
      return;
    }

    // Увеличиваем количество попыток и продолжаем игру
    guessNumber(attempts + 1);
  };

  // Запуск рекурсивной функции
  guessNumber(0);

  // Предложение начать новую игру
  const playAgain = confirm('Хотите сыграть еще раз?');
  if (playAgain) {
    startAdvancedGame(); // Запуск новой игры
  }
};

// Начать игру
startAdvancedGame();
