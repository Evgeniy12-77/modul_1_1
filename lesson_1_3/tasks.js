'use strict'

{
   const rain = Math.round(Math.random (0, 1))
   if (rain === 1) {
      console.log (`Пошел дождь! Возьмите зонт!`)
   } else (
      console.log(`Дождя нет`)
   )
 }
  {
   const a = +prompt("Введите количество баллов по математике");
   const b = +prompt ("Введите количество баллов по русскому языку");
   const c = +prompt ("Введите количество баллов по информатике");
   if ((a + b + c) >= 265) {
      alert ("Поздравляю! Вы поступили на бюджет");
   }
   if ((a + b + c) < 265) {
      alert ("Вы не поступили");
   }
  }
  { const bank = +prompt ("Введите сумму для снятия наличных");
   if (bank % 100 === 0) {
      console.log ("Возьмите ваши деньги")
   } else ( console.log ("Введите сумму кратную 100 р."))
  }
