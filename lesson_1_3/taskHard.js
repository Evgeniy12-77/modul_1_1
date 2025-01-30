'use strict'
{
   const money = +prompt('Введите ваш доход')  

   if (money >=0 && money < 15000) {
      console.log (`Ваш налог составляет ${money * 0.13}, а зарплата ${money - (money * 0.13)}`)};

   if (money >= 15000 && money < 50000) {
      console.log (`Ваш налог составляет ${money * 0.2}, а зарплата ${money - (money * 0.2)}`)};
   
   if (money >= 50000) {
      console.log (`Ваш налог составляет ${money * 0.3}, а зарплата ${money - (money * 0.3)}`)
   } else {console.log (`Вы ввели некорректные данные`)};
};

   