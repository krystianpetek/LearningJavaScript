document.addEventListener('DOMContentLoaded', () => {

    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');
    let buttons = [button1, button2, button3];

    buttons.forEach((button) => button.addEventListener('click', function () {
        const counter = this.nextElementSibling.querySelector('.counter');
        let count = counter.innerHTML;
        counter.innerHTML = ++count;
    }));
});
