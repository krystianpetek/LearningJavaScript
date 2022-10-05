/* jshint -W104 */
const fooElement = document.querySelector('#foo'); // search #foo element
const newBar = document.createElement('div');
fooElement.appendChild(newBar); // append as last child
const newBuz = document.createElement('h1');
fooElement.insertBefore(newBuz, newBar); // insert before child
const newByz = document.createElement('p');
fooElement.replaceChild(newByz, newBar); // replace child


const createdNewDiv = document.createElement('div'); // newly created element
createdNewDiv.id = 'newlyCreatedElement'; // append id

const clonedDiv = fooElement.cloneNode(true); // deep clone searched previously element
fooElement.id = 'clonedFoo'; // reasign id

clonedDiv.insertBefore(createdNewDiv, clonedDiv.firstChild);
fooElement.appendChild(clonedDiv);

const elementToDelete = document.querySelector('#innerDiv').previousElementSibling; // search previous sibling, h3 tag
elementToDelete.parentElement.removeChild(elementToDelete); // remove child h3 as parent
