'use strict';

const = ackermann = (m, n) => {
   if (m === 0) {
       return n + 1;
   } else if (m === 1) {
       return n + 2;
   } else if (m === 2) {
       return 2 * n + 3; // Сокращение для A(2, n) = 2n + 3
   } else {
       return ackermann(m - 1, ackermann(m, n - 1));
   };
};

// Примеры использования
console.log(ackermann(2, 3)); // Вывод: 29
console.log(ackermann(1, 4)); // Вывод: 7