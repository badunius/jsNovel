'use strict';

export class ActionBox {
    constructor(container, engine) {
        this.cont = container;
        this.engine = engine;
    }

    listActions() {
        const scene = this.engine.scene;
        const list = scene.actions;
        // clearing up first
        this.cont.innerHTML = '';
        list.forEach(element => {
            let button = this.cont.cel('button');
            button.textContent = element.caption;
            button.onclick = () => this.engine.setScene(
                element.handler(scene)
            );
        });
    }
}