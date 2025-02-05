'use strict'

const generateRandomArray = (length) => {
   const array = [];
   for (let i = 0; i < length; i++) {
       const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
       array.push(randomNumber);
   };
   return array;
};

console.log(generateRandomArray(55));
