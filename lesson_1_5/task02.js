'use strict'

const ucFirst = (str) => {
   // только пустая строка в логическом контексте даст false
   if (!str) return str;
   return str[0].toUpperCase() + str.slice(1);
 }

 console.log (ucFirst(`папа джонс`));