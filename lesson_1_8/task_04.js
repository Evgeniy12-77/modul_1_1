'use strict'

const isLeapYear = (year) => {
   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); // Алгоритм определения високосного года
};

const generateLeapYears = (n, m) => {
   const leapYears = [];
   const min = Math.min(n, m);
   const max = Math.max(n, m);
   for (let year = min; year <= max; year++) {
       if (isLeapYear(year)) {
           leapYears.push(year);
       }
   };
   return leapYears;
};

console.log(generateLeapYears(2000, 2024));