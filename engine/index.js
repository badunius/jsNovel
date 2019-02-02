'use strict';
import { Engine } from './Engine.js';
// importing story data
import * as story from '../story/index.js';

// patchin HTMLElement
HTMLElement.prototype.cel = function (tag, className, id) {
    const result = document.createElement(tag);
    if (!result) {
        return false;
    }
    if (className) {
        result.class = className;
    }
    if (id) {
        result.id = id;
    }
    if (this.appendChild) {
        this.appendChild(result);
    }
    return result;
}

// creating engine instance
const eng = new Engine(story);

// autorun
document.addEventListener(
    'DOMContentLoaded', 
    () => {
        eng.mount(document.body);        
        eng.setLandscape(
            (document.defaultView.innerHeight < document.defaultView.innerWidth)
        );
        eng.run();
    }
);

document.defaultView.addEventListener(
    'resize',
    (e) => eng.setLandscape((e.target.innerHeight < e.target.innerWidth)) 
)