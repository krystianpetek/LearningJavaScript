document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => button.addEventListener('click', function () {
        const counter = document.querySelector('.counter');
        let count = counter.innerHTML;
        counter.innerHTML = ++count;
    }));
});
