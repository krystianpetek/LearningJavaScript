document.addEventListener('DOMContentLoaded', () => {

    const resize = (x, y) => {
        x.innerHTML = this.innerWidth + "px";
        y.innerHTML = this.innerHeight + "px";
    }

    const windowWidth = document.querySelector('#windowWidth');
    const windowHeight = document.querySelector('#windowHeight');
    resize(windowWidth, windowHeight);

    window.addEventListener('resize', function () {
        resize(windowWidth, windowHeight);
    })


});