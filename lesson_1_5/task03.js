'use strict'


const reverse = a => a.split('') // разбиваем строку на массив символов
.reverse() // инвертируем порядок следования элементов в массиве
.join(''); // объединяем массив обратно в строку

console.log(reverse('hello'))