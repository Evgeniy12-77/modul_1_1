'use strict'

const allStudents = [ {family: 'Иванов', bull: 32}, { family: 'Петров', bull: 23}, {family: 'Сидоров', bull: 90},
   {family: 'Кузнецов', bull: 12}, {family: 'Смирнов', bull: 100}, {family: 'Попов', bull: 86},  {family: 'Соколов', bull: 45}];
console.log (allStudents);

const getPassedStudents = (Array) => { 
   return Array
     .filter(student => student.bull > 70) // Фильтруем студентов с bull > 70
     .map(student => student.family); // Извлекаем фамилии
};

 console.log(getPassedStudents(allStudents));

