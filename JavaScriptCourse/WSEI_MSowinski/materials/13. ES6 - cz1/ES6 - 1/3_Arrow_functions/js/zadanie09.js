const spans = document.querySelectorAll('span');
const uls = Array.from(spans).map((span, index, array) => array[index] = span.nextElementSibling);
document.addEventListener('DOMContentLoaded', () => {
    uls.forEach(ul => ul.classList.add('hidden'));

    spans.forEach(span => span.addEventListener('mouseover', () => {
        const target = span.nextElementSibling;
        target.classList.remove('hidden');
    }));

});
