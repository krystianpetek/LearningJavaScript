document.addEventListener('DOMContentLoaded', () => {

    const photos = document.querySelector('div.container div.page-header').querySelectorAll('img');
    photos.forEach(photo => {
        if (photo.alt === 'Windows') return;
        photo.classList.toggle('hidden');
    });

    const selectOpt = document.querySelector('div.container div.panel div.panel-body form select.form-control');

    selectOpt.addEventListener('change', () => {

        photos.forEach(photo => photo.classList.add('hidden'));

        if (selectOpt.value === 'Windows') {
            Array.from(photos).find(photo => photo.alt === 'Windows').classList.toggle('hidden');
        }
        else if (selectOpt.value === 'Os X') {
            Array.from(photos).find(photo => photo.alt === 'Apple').classList.toggle('hidden');
        }
        else if (selectOpt.value === 'Ubuntu') {
            Array.from(photos).find(photo => photo.alt === 'Ubuntu').classList.toggle('hidden');
        }
    });

});