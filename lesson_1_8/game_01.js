'use strcit'

const startGame = () => {
   const secretNumber = Math.floor(Math.random() * 100) + 1; // Загадать число от 1 до 100
   let guessedNumber;
   
   while (true) {
       guessedNumber = prompt("Введите ваше число от 1 до 100 (или нажмите 'Отмена' для выхода):");
       
       if (guessedNumber === null) { // Пользователь нажал 'Отмена'
           alert("Игра окончена.");
           break;
       }
       
       guessedNumber = Number(guessedNumber);
       
       if (isNaN(guessedNumber)) { // Проверка на ввод числа
           alert("Введи число!");
           continue;
       }
       
       if (guessedNumber > secretNumber) {
           alert("Меньше!");
       } else if (guessedNumber < secretNumber) {
           alert("Больше!");
       } else {
           alert("Правильно!");
           break;
       }
   }
}

// Начать игру
startGame();