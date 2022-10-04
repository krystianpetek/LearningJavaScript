const barElement = document.querySelector('#bar'); // div#bar            // this element
const barParent = barElement.parentElement; // div#foo                   // moved Up
const bazElement = barElement.previousElementSibling; // div#baz         // moved Left
const buzElement = barElement.nextElementSibling; // div#buz             // moved Right

console.log([barElement, barParent, bazElement, buzElement]);

const unOrderedList = document.querySelector('ul');
console.log(unOrderedList.children);                                    // returns all childrens
console.log(unOrderedList.firstElementChild); // or children[0]         // first child
console.log(unOrderedList.lastElementChild);                            // last child
console.log("has childrens?", unOrderedList.hasChildNodes() ? "yes" : "no"); // method check if given element has children