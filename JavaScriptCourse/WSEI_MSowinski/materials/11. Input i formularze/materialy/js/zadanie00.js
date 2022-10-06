const form = document.querySelector('div.panel div.panel-body form');
const infoContainer = form.querySelector('.info-container');
const errorMessage = infoContainer.querySelector('.error-message');
const successMessage = infoContainer.querySelector('.success-message');
const submitButton = form.querySelector('p button');

form.addEventListener('submit', function (ev) {

    if (!this.querySelector('#email').value.includes('@')) {
        errorMessage.innerText = 'Email musi posiadać znak @';
        ev.preventDefault();
        return;
    }

    if (this.querySelector('#name').value.length <= 6) {
        errorMessage.innerText = 'Twoje imię jest za krótkie';
        ev.preventDefault();
        return;
    }

    if (this.querySelector('#surname').value.length <= 6) {
        errorMessage.innerText = 'Twoje nazwisko jest za krótkie';
        ev.preventDefault();
        return;
    }

    const pass1 = this.querySelector('#pass1');
    if (pass1.value.length < 1 && pass1.value === this.querySelector('#pass2').value) {
        errorMessage.innerText = 'Hasła nie są takie same lub puste';
        ev.preventDefault();
        return;
    }

    if (!this.querySelector('#agree').checked) {
        errorMessage.innerText = 'Musisz zaakceptować warunki';
        ev.preventDefault();
        return;
    }
});