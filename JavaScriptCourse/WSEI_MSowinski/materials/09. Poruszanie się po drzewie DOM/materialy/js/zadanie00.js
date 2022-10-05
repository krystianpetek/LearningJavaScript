const first = document.querySelector('.first').children[0].children[2];
const second = document.querySelector('#second').parentElement.children[3];
const middleChildren = Math.floor(document.querySelector('[data-ex="third"').parentElement.parentElement.lastElementChild.firstElementChild.children.length / 2);
const third = document.querySelector('[data-ex="third"').parentElement.parentElement.lastElementChild.firstElementChild.children[middleChildren];
const fourth = document.querySelector('div.forth').parentElement.querySelectorAll('article')[0].querySelectorAll('p')[1];

console.log(first, second, third, fourth);