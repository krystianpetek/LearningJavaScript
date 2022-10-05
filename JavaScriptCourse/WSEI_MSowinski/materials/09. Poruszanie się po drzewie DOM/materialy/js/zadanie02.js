const buttons = document.querySelectorAll('a.button');

buttons.forEach(button => button.addEventListener('click', function () {
    const parent = this.parentElement;
    if (parent) {
        parent.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}));

