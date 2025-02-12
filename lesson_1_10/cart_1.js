const cart = {
items: [],
  totalPrice: 0,
  count: 0,

  // Геттер для totalPrice
  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    // Возвращает общую стоимость без изменения состояния
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },

  increaseCount(amount) {
    this.count += amount;
  },

  add(name, price, quantity = 0) {
    const item = {
      name,
      price,
      quantity,
    };
    this.items.push(item);
    this.increaseCount(quantity); // Увеличивает count через метод increaseCount
    // Вызываем метод calculateItemPrice при необходимости, но не сохраняем в totalPrice
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items, null, 2));
   console.log(`Общая стоимость корзины: ${this.totalPrice}`); 
   // Используем геттер для получения стоимости
  },
},

cart.add('Товар 1', 100, 2);
cart.add('Товар 2', 200, 1);
cart.add('Товар 3', 50, 5);

// Вызов метода print для вывода информации в консоль
cart.print();
