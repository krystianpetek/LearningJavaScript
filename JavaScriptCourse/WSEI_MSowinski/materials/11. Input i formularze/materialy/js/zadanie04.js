/* jshint -W104 */
document.addEventListener('DOMContentLoaded', function (ev) {

    const form = this.querySelector('div.container div.panel-body form');
    const cardNumberInput = form.querySelector('#name');
    const displayedName = form.querySelector('#type');

    cardNumberInput.addEventListener('input', (ev) => {

        const value = ev.target.value;

        if (isNaN(value)) {
            cardNumberInput.nextElementSibling.style.background = '#FF8888';
            displayedName.innerText = '';
            return false;
        }

        if (value.length >= 13 && value.length < 17) {

            if (value[0] == 4) {
                displayedName.innerText = 'Visa';
            } else if (value[0] == 5 && value.length == 16) {
                displayedName.innerText = 'Mastercard';
            }
            else if (value[0] == 3 && value[1] == 4 || value[1] == 7) {
                displayedName.innerText = 'American Express';
            }

        } else if (value.length > 16) {
            cardNumberInput.nextElementSibling.style.background = '#FF8888';

            displayedName.innerText = '';
        }
        else {
            cardNumberInput.nextElementSibling.style.background = '#eeeeee';
            displayedName.innerText = '';
        }




    });

    const submitButton = form.querySelector('p button');
    submitButton.addEventListener('click', (ev) => { ev.preventDefault(); });
});