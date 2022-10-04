document.addEventListener('DOMContentLoaded', () => {

    const boxes = document.querySelectorAll('div.box');

    for (const box of boxes) {
        box.addEventListener('mouseover', function () {
            let randomColor = '#' + Math.floor(Math.random() * 16777215 /* #FFFFFF in hex */).toString(16);
            box.style.backgroundColor = randomColor;
        });
    }
});