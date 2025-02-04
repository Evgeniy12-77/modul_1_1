'use strict'
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (Array) => {
   return Array.map(name => 'Mr ' + name); // Добавляем префикс 'Mr' к каждому имени
}

console.log (addPrefix(names));