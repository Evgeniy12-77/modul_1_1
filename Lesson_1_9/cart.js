// cart.js
const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice: function() {
        return this.totalPrice;
    },

    calculateItemPrice: function() {
        this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },

    increaseCount: function(amount) {
        this.count += amount; // Исправлено на использование this.count
    },

    add: function(name, price, quantity = 1) {
        const item = {
            name: name,
            price: price,
            quantity: quantity
        };
        this.items.push(item);
        this.increaseCount(quantity); // Увеличивает count через метод increaseCount
        this.calculateItemPrice(); // Пересчитывает общую стоимость корзины
    },

    clear: function() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print: function() {
        console.log(JSON.stringify(this.items, null, 2));
        console.log("Общая стоимость корзины: " + this.getTotalPrice());
    }
};

// Пример добавления товаров в корзину
cart.add("Товар 1", 100, 2);
cart.add("Товар 2", 200, 1);
cart.add("Товар 3", 50, 5);

// Вызов метода print для вывода информации в консоль
cart.print();