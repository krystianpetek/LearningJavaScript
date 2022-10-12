console.log('task 4, point 1');
function getTagsOfElements(elements) {
    return Array.from(elements).map(x => x.tagName);
}
const sample_classes = document.querySelectorAll('.sample_class');
console.log(getTagsOfElements(sample_classes));

console.log('\ntask 4, point 2');
function getClassesOfElement(element) {
    return [...element.classList];
}
const sample_id = document.querySelector('#sample_id');
const sample_id_result = getClassesOfElement(sample_id);
console.log(sample_id_result);

console.log('\ntask 4, point 3');
function getInnerTextsOfElements(elements) {
    return [...elements];
}
const sample_class_2 = document.querySelector('.sample_class_2').querySelectorAll('li');
const sample_class_2_result = getInnerTextsOfElements(sample_class_2);
console.log(sample_class_2_result);

console.log('\ntask 4, point 4');
function getAddressesOfElements(elements) {
    const array = Array.from(elements).map(x => x.getAttribute('href'));
    return array;
}
const links = document.querySelectorAll('a');
const links_result = getAddressesOfElements(links);
console.log(links_result);

console.log('\ntask 4, point 5');
function getChildrens(elements) {
    const array = Array.from(elements.children);
    return array;
}
const sample_class_3 = document.querySelector('.sample_class_3');
const sample_class_3_result = getChildrens(sample_class_3);
console.log(sample_class_3_result);