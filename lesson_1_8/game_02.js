'use strict';
const startAdvancedGame = () => {
  const min = parseInt(prompt('Введите минимальное число диапазона:'));
  const max = parseInt(prompt('Введите максимальное число диапазона:'));

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert('Введи число');
    return;
  }

  const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const attemptsAllowed = Math.ceil((max - min + 1) * 0.3);
  // 30% от количества чисел в диапазоне
  const userGuesses = [];
  let attempts = 0;

  while (attempts < attemptsAllowed) {
    let guessedNumber = prompt(
      `Введите ваше число от ${min} до ${max} (осталось попыток: ${
        attemptsAllowed - attempts
      }):`);

    if (guessedNumber === null) {
      // Пользователь нажал 'Отмена'
      alert('Игра окончена.');
      return;
    }

    guessedNumber = Number(guessedNumber);

    if (isNaN(guessedNumber)) {
      // Проверка на ввод числа
      alert('Введи число!');
      continue;
    }

    if (userGuesses.includes(guessedNumber)) {
      alert('Вы уже вводили это число! Попробуйте другое.');
      continue;
    }

    // Добавление введенного числа в массив
    userGuesses.push(guessedNumber);
    console.log(`Ваши попытки: ${userGuesses}`);

    attempts++;

    if (guessedNumber > secretNumber) {
      alert('Меньше!');
    } else if (guessedNumber < secretNumber) {
      alert('Больше!');
    } else {
      alert('Правильно! Вы угадали число.');
      break;
    }

    if (attempts === attemptsAllowed) {
      alert(
        `Вы исчерпали все попытки. Игра окончена. 
        Загаданное число было ${secretNumber}`,
      );
    }
  }

  // Предложение начать новую игру
  const playAgain = confirm('Хотите сыграть еще раз?');
  if (playAgain) {
    startAdvancedGame(); // Запуск новой игры
  }
};

// Начать игру
startAdvancedGame();
