'use strict';

export class ActionBox {
    constructor(container, engine) {
        this.cont = container;
        this.engine = engine;
    }

    listActions(list) {
        const scene = this.engine.scene;
        // clearing up first
        this.cont.innerHTML = '';
        list.forEach(element => {
            let button = this.cont.cel('button');
            button.textContent = element.caption;
            button.onclick = () => this.engine.performAction(
                element.handler(scene)
            );
        });
    }
}