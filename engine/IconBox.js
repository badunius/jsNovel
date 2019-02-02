export class IconBox {
    constructor(container) {
        this.cont = container;
        this.cont.classList.add('crisp')
    }

    setImage(fileName) {
        this.cont.style.backgroundImage = `url('assets/icons/${fileName}.png')`;
    }
}