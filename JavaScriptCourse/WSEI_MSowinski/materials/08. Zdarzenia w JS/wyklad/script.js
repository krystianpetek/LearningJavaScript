const button = document.querySelector('button#counter');
// one listener
let clickCount = 0;
button.addEventListener('click', function (event) {
    clickCount += 1;
    console.log('Click counter', clickCount);
});


const button2 = document.querySelector('#anotherCounter');
const randomWords = ['Some', 'Random', 'Words'];

// next listener
function clickCounter(event) {

    if (clickCount > 10) {
        debugger;
        // remove event listener, not possible to remove anonymous function from eventListener, because it is not named
        button2.removeEventListener('click', clickCounter);
    } else {

        clickCount *= 2;
        console.log('Multiplication click', clickCount);
    }
}

// on one element we can listen more events
function randomWord(event) {
    let myWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    console.log(myWord);
}
button2.addEventListener('click', clickCounter);
button2.addEventListener('click', randomWord);

// other events than 'click'
const button3 = document.querySelector('#lastButton');
button3.addEventListener('mouseover', () => console.log('hoverButton'));

// special event after loaded DOM tree
window.addEventListener('DOMContentLoaded', () => { console.log('newEvent') });

// get reference for all buttons
const buttons = document.querySelectorAll('button');
for (const element of buttons) {
    element.addEventListener('click', function (event) {
        console.log(event.target);
        this.style.backgroundColor = 'red';
    })
}

// event object properties
button.addEventListener('contextmenu', function (event) {
    console.log(event.currentTarget); // event target
    console.log(event.type); // return event type
    console.log(event.timeStamp); // return time from DOMLoaded to fire event
    event.preventDefault(); // prevent default action, e.g. following the URL in anchor tag
})

// event propagation ( event bubbling(#bar) and event capturing(#foo) )
document.querySelector('#foo').addEventListener('click', function () {
    console.log('Event registered, element #foo');
}, true);

document.querySelector('#bar').addEventListener('click', function (event) {
    console.log('Event registered, element #bar');
    console.log(event.button);
    console.log(event.clientY);
});

window.addEventListener('keydown', function (event) {
    console.log(`ctrl pressed: ${event.ctrlKey} + ${event.key}, ${event.keyCode}`);
});
