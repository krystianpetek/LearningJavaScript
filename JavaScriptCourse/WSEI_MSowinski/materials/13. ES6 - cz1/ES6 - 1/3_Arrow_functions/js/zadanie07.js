const App = function () {
    this.websites = ['onet', 'wp', 'facebook'];
    this.links = [];
}

App.prototype.generateLinks = function () {
    this.links = this.websites.map(x => `https://${x}.com`);
    const menu = document.querySelector('.menu ul').children;

    // i don't know how to do it in jQuery, therefore i did it in pure JS
    for (let i = 0; i < menu.length; i++) {
        menu[i].querySelector('a').href = this.links[i];
    }
};

let app = new App();
app.generateLinks();
console.log(app.links) // ["https://onet.com", "https://wp.com", "https://facebook.com"]


// OR App class created like Class
class AppClass {
    constructor() {
        this.websites = ['onet', 'wp', 'facebook'];
        this.links = [];
    }

    generateLinks() {
        this.links = this.websites.map(x => `https://'${x}.com`);
    }
}

let appClass = new AppClass();
appClass.generateLinks();
console.log(appClass.links);