'use strict'

{
   const money = +prompt('Введите ваш доход')  

   if (money >= 0 && money <= 15000) {
      console.log (`Ваш налог составляет ${money * 0.13}, а зарплата ${money - (money * 0.13)}`)};

   if (money > 15000 && money <= 50000) {
      console.log (`Ваш налог составляет ${0.2 * (money - 15000)}, а зарплата ${money - 0.2 * (money - 15000)}`)};
   
   if (money > 50000) {
      console.log (`Ваш налог составляет ${0.3 * (money - 50000)}, а зарплата ${money - 0.3 * (money - 50000)}`)
   } else (console.log (`Вы ввели некорректные данные`));

};