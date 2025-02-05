'use strict'

const generateRandomArray_2 = (length, n, m, type) => {
   const array = [];
   const min = Math.min(n, m);
   const max = Math.max(n, m);
   for (let i = 0; i < length; i++) {
       let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
       if (type === 'even' && randomNumber % 2 !== 0) {
           randomNumber += 1; // Преобразование в четное число, если оно не четное
           if (randomNumber > max) randomNumber -= 2; // Если выходим за предел, корректировка
       } else if (type === 'odd' && randomNumber % 2 === 0) {
           randomNumber += 1; // Преобразование в нечетное число, если оно четное
           if (randomNumber > max) randomNumber -= 2; // Если выходим за предел, корректировка
       }
       array.push(randomNumber);
   }
   return array;
};

console.log(generateRandomArray_2(50, 10, 40, 'even'));
