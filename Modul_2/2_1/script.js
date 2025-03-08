'use strict';

const items = document.querySelectorAll('.item');
const lists = document.querySelectorAll('.props__list');
const itemsFour = document.querySelectorAll('.props__item_four');
const ads = document.querySelector('.ads');
const itemsTwo = document.querySelectorAll('.props__item_two');
const itemsTitles = document.querySelectorAll('.item__title');


console.log(lists);
console.log(items);
console.log(itemsFour);
console.log(itemsTwo);
console.log(itemsTitles);


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
itemsTitles[1].remove();
itemsTitles[3].remove();
itemsTitles[4].remove();
lists[2].before(itemsTitles[3]);
lists[3].before(itemsTitles[4]);
lists[5].before(itemsTitles[1]);

