const form = document.querySelector('div.panel div.panel-body form');
const invoice = document.querySelector('#invoice');
const invoiceData = document.querySelector('#invoiceData');

document.addEventListener('DOMContentLoaded', () => {

    if (!invoice.checked) {
        invoiceData.classList.toggle('hidden');
    }

    invoice.addEventListener('click', () => {
        invoiceData.classList.toggle('hidden');
    });

});
