'use strict';

const items = document.querySelectorAll('.item');
const lists = document.querySelectorAll('.props__list');
const itemsFour = document.querySelectorAll('.props__item_four');
const ads = document.querySelector('.ads');
const itemsTwo = document.querySelectorAll('.props__item_two');

console.log(lists);
console.log(items);
console.log(itemsFour);
console.log(itemsTwo);

items[0].replaceWith(items[1]);
items[3].after(items[0]);
lists[3].replaceWith(lists[4]);
items[4].append(lists[3]);
itemsFour[5].remove();
itemsFour[2].append(itemsFour[5]);
ads.remove();
itemsTwo[7].remove();
itemsTwo[8].remove();
itemsTwo[6].append(itemsTwo[7]);
itemsTwo[7].append(itemsTwo[8]);

