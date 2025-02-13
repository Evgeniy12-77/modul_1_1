// eslint-disable-next-line strict
const cartCopy = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0, // новое свойство для хранения скидки

  // Геттер для totalPrice
  // eslint-disable-next-line no-dupe-keys
  get totalPrice() {
    return this.calculateItemPrice(); // учитываем скидку при вычислении
  },

  calculateItemPrice() {
    // Сначала вычисляем общую стоимость без скидок
    const totalAmount = this.items.reduce(
      (acc, item) => acc + item.price * item.quantity, 0);
    // Применяем скидку, если она задана
    // eslint-disable-next-line max-len
    const discountAmount = (totalAmount * this.discount) / 100; // вычисляем сумму скидки
    // eslint-disable-next-line max-len
    return totalAmount - discountAmount; // возвращаем итоговую сумму с учетом скидки
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
    this.increaseCount(quantity);
  },

  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0; // очищаем скидку при чистке корзины
  },

  print() {
    console.log(JSON.stringify(this.items, null, 2));
    console.log(`Общая стоимость корзины с учетом скидки: ${this.totalPrice}`);
  },

  // Сеттер для скидки
  set setDiscount(promocode) {
    if (typeof promocode === 'string') {
      if (promocode === 'METHED') {
        this.discount = 15; // скидка 15%
      } else if (promocode === 'NEWYEAR') {
        this.discount = 21; // скидка 21%
      } else {
        this.discount = 0; // если промокод не валиден, скидка 0%
      }
    } else {
      throw new Error('Промокод должен быть строкой');
    }
  },
};
