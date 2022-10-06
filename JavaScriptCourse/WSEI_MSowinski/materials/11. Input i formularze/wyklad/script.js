const form = document.querySelector('#form');
console.log(form.action);
console.log(form.method);
console.log(form.elements); // returns all form elements
// events on form: submit and reset

const inputName = document.querySelector('#name');
inputName.value = "Adam"; // set input value

console.log(inputName.value);
console.log(inputName.type);
console.log(inputName.disabled);
console.log(inputName.checked); // only for checkbox
console.log(inputName.selected); // only elements option inside select
// events on inputs: blur, focus, change, keydown, keyup, keypress