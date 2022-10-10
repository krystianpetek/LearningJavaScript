class MenuGenerator {
    constructor(menuType, menuElements) {
        this.menuType = menuType;
        this.menuElements = menuElements;
    }

    getType() {
        console.log(this.menuType);
    }

    showItems() {
        console.log(...this.menuElements);
    }
}

class HorizontalMenuGenerator extends MenuGenerator {

}

class VerticalMenuGenerator extends MenuGenerator {
    anime() {
        console.log('animacja menu typu: ', this.menuType);
    }
}

export let hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
export let vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);