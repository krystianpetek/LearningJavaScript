/* jshint -W104 */
const list = document.querySelector('ul.list');
const removeButton = document.querySelector('#remove');

removeButton.addEventListener('click', () => {
    Array.from(list.children).forEach(listItem => listItem.remove());
});
