document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('div#box');
    container.addEventListener('mousemove', (event) => {
        document.querySelector('#globalX').innerHTML = event.screenX;
        document.querySelector('#globalY').innerHTML = event.screenY;
        document.querySelector('#localX').innerHTML = event.clientX;
        document.querySelector('#localY').innerHTML = event.clientY;
    });

});