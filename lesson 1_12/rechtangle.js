'use strict';

const rectangle = {
  // Инициализация высоты и ширины
  width: 5,
  height: 5,

  // Сеттер для ширины
  setWidth(value) {
    if (typeof value === 'number') {
      this.width = value;
    } else {
      console.error('Ширина должна быть числом.');
    }
  },

  // Сеттер для высоты
  setHeight(value) {
    if (typeof value === 'number') {
      this.height = value;
    } else {
      console.error('Высота должна быть числом.');
    }
  },

  // Геттер для периметра
  get perimeter() {
    const perim = 2 * (this.width + this.height);
    return perim + ' см';
  },

  // Геттер для площади
  get area() {
    const area = this.width * this.height;
    return area + ' см²';
  },
};

// Примеры использования

console.log(rectangle.perimeter); // Вывод: "20 см"
console.log(rectangle.area); // Вывод: "25 см²"

// Установка новых значений
rectangle.setWidth(10);
rectangle.setHeight(15);

console.log(rectangle.perimeter); // Вывод: "50 см"
console.log(rectangle.area); // Вывод: "150 см²"

// Пример, когда передается некорректное значение
rectangle.setWidth('не число'); // Вывод: "Ширина должна быть числом."
