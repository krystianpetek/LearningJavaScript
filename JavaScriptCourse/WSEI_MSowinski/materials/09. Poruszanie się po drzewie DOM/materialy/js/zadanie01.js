const buttons = document.querySelectorAll('a.button');

buttons.forEach(button => button.addEventListener('click', function (event) {
    const nextEl = this.nextElementSibling;
    if (nextEl) {
        nextEl.classList.toggle('hidden');
    }
}));

