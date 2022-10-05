/* jshint -W104 */
/* jshint -W119 */
const button = document.querySelector('a.button');
const list = document.querySelector('ul.menu');

button.addEventListener('click', function () {

    const numberOfSiblings = list.children.length;
    const listItem = document.createElement('li');
    listItem.innerText = `Number of elements in list before this added: ${numberOfSiblings}`;
    list.appendChild(listItem);
});