'use strict';

const addRandomNumber = (arr) => {
  // Генерируем случайное целое число от 0 до 10
  const randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber); // Добавляем число в массив

  // Проверяем сумму элементов массива
  const sum = arr.reduce((acc, num) => acc + num, 0);

  if (sum < 50) {
    // Если сумма меньше 50, вызываем функцию снова
    return addRandomNumber(arr);
  } else {
    // Если сумма 50 или больше, возвращаем массив
    return arr;
  }
};

// Пример использования
const result = addRandomNumber([]);
console.log(result);
