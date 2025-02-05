'use strict'

const  generateRandomArray_1 = (length, n, m) => {
   const array = [];
   const min = Math.min(n, m); // Определение минимального значения
   const max = Math.max(n, m); // Определение максимального значения
   for (let i = 0; i < length; i++) {
       const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного числа в диапазоне от n до m
       array.push(randomNumber);
   }
   return array;
};

console.log(generateRandomArray_1(50, 36, 77));