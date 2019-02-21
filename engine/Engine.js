'use strict';
import { IconBox } from './IconBox.js';
import { TextBox } from './TextBox.js';
import * as LANG from '../locale/index.js';
import { ActionBox } from './ActionBox.js';
import InfoBox from './InfoBox.js';

const INITIAL_CONTEXT = {
    //storeKey: 'DEMO'
}

export class Engine {
    constructor(story) {
        this.story = story;
        this.context = INITIAL_CONTEXT;
        this.scene = {};
        this.currentScene = null;
    }

    createBox(tag, area) {
        const result = document.createElement(tag);
        result.classList.add(area);
        this.cont.appendChild(result);
        return result;
    }

    mount(container) {
        this.cont = container;
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

        this.info = new InfoBox (
            this.createBox('div', 'stats')
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
            console.info('Available scenes: ', Object.keys(this.story));
            return false;
        }
        // looking for a new scene
        this.scene = Object.assign(this.story[sceneName]);
        this.scene.store = {};
        // adding a context
        this.scene.context = Object.assign(this.context);
        // if this is not the scene we had before and new scene have a setup handler - running it
        if ((this.currentScene !== sceneName)&&(typeof this.scene.setup === 'function')) {
            this.scene.setup();
        }
        // updating a current scene name
        this.currentScene = sceneName;
        // displaying it
        console.info('Displaying a scene: %o', this.scene);
        this.text.clear();
        this.text.putText(this.scene.description, this.scene);
        this.icon.setImage(this.scene.icon);
        this.actions.listActions(this.scene.actions);
        this.info.update(this.scene.stats);
    }

    performAction(action) {
        // we're expectin to have a mixed set of fields
        // config: object -- to update configuration
        // context: object -- to update context
        // scene: string -- to switch to new scene
        // actions: array -- to update list of actions
        console.log('performing action: %o', action);
        // updating config
        if (action.config) {
            // TODO
        }
        
        // updating context
        if (action.context) {
            this.context = Object.assign(this.context, action.context);
        }

        // updating scene
        if (action.scene) {
            this.setScene(action.scene);
        }

        // updating action list
        if (action.actions) {
            this.actions.listActions(action.actions);
        }

        // updating userpic
        if (action.userpic) {
            // TODO
        }

        // updating user stats
        if (action.stats) {
            // TODO
            this.info.update(action.stats);
        }
        console.info('actual context: %o', this.context);
    }
}