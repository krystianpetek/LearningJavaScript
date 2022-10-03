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

var myUser = document.querySelector('#user');
console.log(myUser.dataset); // object with dataset items
console.log(myUser.dataset.id); // 424
console.log(myUser.dataset.loggedIn); // empty element
myUser.dataset.id = 4444;
console.log(myUser.dataset.id); // 4444

myUser.dataset.something = "val"; // new value
console.log(myUser.dataset.something); // data-something="val"

// element attributes
if (myUser.hasAttribute('id')) // has
{
    console.log(myUser.getAttribute('id')) // if has attribute, get it
    myUser.removeAttribute('id');
    console.log(myUser.hasAttribute('id')) // should return false
    myUser.setAttribute('id', 'newId');
}

// get and set CSS style
let ah1 = app.querySelector('#glink h1');
ah1.style.backgroundColor = '#dbdbdb';