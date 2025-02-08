'use strict'

const countUniqueIPAddresses = (ipList) => {
   // Создаем новое множество, передавая ему массив ipList
   const uniqueIPs = new Set(ipList);
   // Возвращаем размер множества, что является количеством уникальных ip-адресов
   return uniqueIPs.size;
};

// Пример использования функции
const ipAddresses = [
   "192.168.1.1",
   "192.168.1.2",
   "192.168.1.1",
   "10.0.0.1",
   "10.0.0.2",
   "192.168.1.3",
   "10.0.0.1"
];

const uniqueCount = countUniqueIPAddresses(ipAddresses);
console.log(`Количество уникальных IP-адресов: ${uniqueCount}`);