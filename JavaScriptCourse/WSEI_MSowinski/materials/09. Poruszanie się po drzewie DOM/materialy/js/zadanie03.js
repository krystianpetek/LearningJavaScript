/*jshint -W087 */

const lists = document.querySelectorAll('div.listContainer');

lists.forEach(list => list.addEventListener('mouseenter', function (ev) {

    const childrens = Array.from(list.firstElementChild.children).forEach(child => child.style.backgroundColor = '#22AAFF');
    const firstChild = list.firstElementChild.firstElementChild.style.backgroundColor = '#FF1111';
    // const halfOfList = Math.floor(list.firstElementChild.children.length / 2);
    // const middleChild = list.firstElementChild.children[halfOfList].style.backgroundColor = '#22AAFF';
    const lastChild = list.firstElementChild.lastElementChild.style.backgroundColor = '#40FF40';

}));