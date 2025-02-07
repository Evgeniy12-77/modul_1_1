// cart.js
const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice () {
        return this.totalPrice;
    },

    calculateItemPrice () {
        this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },

    increaseCount (amount) {
        this.count += amount; 
    }, 

    add (name, price, quantity = 0) {
        const item = {
            name: name,
            price: price,
            quantity: quantity
        };
        this.items.push(item);
        this.increaseCount(quantity); // Увеличивает count через метод increaseCount
        this.calculateItemPrice(); // Пересчитывает общую стоимость корзины
    },

    clear () {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print () {
        console.log(JSON.stringify(this.items, null, 2));
        console.log(`Общая стоимость корзины: ${this.getTotalPrice()}`);
    }
};

// Пример добавления товаров в корзину
cart.add('Телевизор', 10000,);
cart.add("Телефон", 5000, 1);
cart.add("Планшет", 10000, 5);

// Вызов метода print для вывода информации в консоль
cart.print();