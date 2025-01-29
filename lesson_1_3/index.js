'use strict'

{
const item = prompt("Введите наименование товара");
const count = +prompt("Введите количество товара");
const category = prompt("Введите категорию товара");
const price = +prompt("Введите цену за единицу товара");
if (count >= 1 && price >= 1 || count === 0 && price === 0) {
   console.log (`На складе ${count} ${item} на сумму ${count * price}`)
}
else (
   console.log (`Вы ввели некорректные данные`)
)
};

