'use strict'

const converter = (euro) => {
   let euroCopi = euro;
   let euroPrice = euroCopi * 1.2 * 64;
   return euroPrice;
};
console.log (converter(10));

const ucFirst = (str) => {
   // только пустая строка в логическом контексте даст false
   if (!str) return str;
   return str[0].toUpperCase() + str.slice(1);
 }

 console.log (ucFirst(`папа джонс`));

 const reverse = a => a.split('') // разбиваем строку на массив символов
 .reverse() // инвертируем порядок следования элементов в массиве
 .join(''); // объединяем массив обратно в строку

console.log(reverse('hello'))

const calculate = (sum, items, promo) => { 
   let copiSum = sum;
   let copiItems = items;
   let copiPromo = promo;
   
   const calculateItems = () => {
      if (copiItems >= 10) {
         return 0.03 * copiSum;
      } else  0;
   };

   const res_1 = calculateItems();
   const calculateSum = () => {
      if (copiSum > 30000) {
         return (copiSum - 30000) * 0.15
      } else return 0
   }
   const res_2 = calculateSum();
   const calculatePromo = () => {
      if (copiPromo === 'METHED') {
         return 0.10 * copiSum;
      } else return 0;
   }
   const res_3 = calculatePromo();
   const copiSumTotal_1 = copiSum - res_1 - res_2 - res_3;
   const calculatePromo_2 = () => {
      if (copiPromo === 'G3H2Z1' && copiSumTotal_1 > 2000) {
         return 500;
      } else return 0;
   };
   const res_4 = calculatePromo_2 ();

   const res_5 = res_1 + res_2 + res_3 + res_4;

   const sumTotal = copiSum - res_5;
   return  `Ваша корзина товаров с учетом всех скидок равна ${sumTotal} рублей` ;
};    

   


    

console.log (calculate(40000, 10, 'METHED'));
console.log (calculate(40000, 10, 'G3H2Z1'));
console.log (calculate(40000, 10,));
console.log (calculate('hkfd', 'kdfwl'))



