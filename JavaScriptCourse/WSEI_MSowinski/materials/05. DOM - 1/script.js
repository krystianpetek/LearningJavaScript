const app = document.querySelector('#app');
const spans = document.querySelectorAll('.attr');
const classListToApp = app.classList;

classListToApp.add('class', 'class2'); // reference to #app, add classes to app
classListToApp.toggle('class', false); // switch class to off
console.log(app.className); // display classNames
classListToApp.remove('class2'); // remove class from app classList
app.id = 'id'; // set id for html tag

console.log(app.innerHTML); // returns html code without tag
console.log(app.outerHTML); // returns html code with tag
console.log(app.innerText); // returns text from inside of tag
console.log(app.tagName); // returns tagName, in UPPERCASE

console.log(app.querySelector('#glink').dataset); // returns assotiation array (object) dataset
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

console.log(typeof (app.dataset));
console.log(app.dataset);