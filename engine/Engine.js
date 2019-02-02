'use strict';
import { IconBox } from './IconBox.js';
import { TextBox } from './TextBox.js';
import * as LANG from '../locale/index.js';
import { ActionBox } from './ActionBox.js';

const INITIAL_CONTEXT = {
    storeKey: 'DEMO'
}

export class Engine {
    constructor(story, actions) {
        this.story = story;
        this.actions = actions;
        this.context = INITIAL_CONTEXT;
        this.scene = {};
        this.currentScene = null;
    }

    createBox(tag, area) {
        const result = document.createElement(tag)
        result.classList.add(area)
        this.cont.appendChild(result)
        return result
    }

    mount(container) {
        this.cont = container
        this.icon = new IconBox(
            this.createBox('div', 'icon')
        );
        this.actor = new IconBox(
            this.createBox('div', 'actor')
        );

        this.text = new TextBox(
            this.createBox('div', 'text'),
            this.context
        );

        this.actions = new ActionBox(
            this.createBox('div', 'actions'),
            this
        );
    }

    run() {
        // grabbing a starting scene
        this.setScene(this.story.__ENTRY_POINT);
    }

    setLandscape(isLandscape) {
        if (isLandscape) {
            this.cont.classList.remove('port');
            this.cont.classList.add('land');
        } else {
            this.cont.classList.remove('land');
            this.cont.classList.add('port');
        }
    }

    setScene(sceneName) {
        sceneName = sceneName ? sceneName : this.currentScene;
        // failsafe
        if (!this.story[sceneName]) { 
            console.warn('Last action reffered to an undefined scene: %s', sceneName);
            console.info('Available scenes: ', Object.keys(this.story))
            return false;
        }
        // updating a current scene name
        this.currentScene = sceneName;
        // looking for a new scene
        this.scene = Object.assign(this.story[sceneName]);
        // adding a context
        this.scene.context = this.context;
        // if this scene have a before handler - running it
        if (this.scene.before) {
            this.scene.before();
        }
        // displaying it
        this.text.clear();
        this.text.putText(this.scene.description);
        this.icon.setImage(this.scene.icon);
        this.actions.listActions();
    }
}