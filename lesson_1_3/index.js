'use strict'

{
const item = prompt("Введите наименование товара");
const count = +prompt("Введите количество товара");
const category = prompt("Введите категорию товара");
const price = +prompt("Введите цену за единицу товара");

console.log(`На складе ${count} ${item} на общую сумму ${count * price}`);
}

