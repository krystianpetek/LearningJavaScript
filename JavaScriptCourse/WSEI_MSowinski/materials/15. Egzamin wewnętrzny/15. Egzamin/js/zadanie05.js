const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
buttons.forEach(x => x.addEventListener('click', (ev) => {
    container.innerText = ev.target.dataset.text;
}));