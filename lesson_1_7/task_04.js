'use strict'

const allCashbox = [
   [12, 4500], 
   [7, 3210], 
   [4, 650], 
   [3, 1250], 
   [9, 7830], 
   [1, 990], 
   [6, 13900], 
   [1, 370]
 ];
 
 function calculateAveragePrice(cashboxArray) {
   let totalQuantity = 0; // Суммарное количество товаров
   let totalSum = 0; // Суммарная стоимость
 
   cashboxArray.forEach(([quantity, sum]) => {
     totalQuantity += quantity; // Увеличиваем общее количество товаров
     totalSum += sum; // Увеличиваем общую сумму
   });
 
   return totalSum / totalQuantity; // Расчёт средней стоимости одного товара
 };
 
 const averagePrice = calculateAveragePrice(allCashbox);
 
 console.log(`Средняя стоимость одного товара: ${averagePrice.toFixed(2)}`); // Форматируем до двух знаков после запятой