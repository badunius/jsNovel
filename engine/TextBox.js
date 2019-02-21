'use strict';

export class TextBox {
    constructor(container, context = {}) {
        this.cont = container;
        this.context = context;
    }

    clear() {
        this.cont.innerHTML = '';
    }

    putText(lines, scene) {
        // lines is supposed to be an array of objects
        lines.forEach(element => {
            const key = Object.keys(element)[0];
            const tag = key.split(':')[0];
            const classes = key.split(':').slice(1).join(' ').trim()
            const data = element[key];
            // (deprecated)       replacing %tag% with an evaluation of ${tag}      
            //const tagged = data.replace(/\%(\S+?)\%/gi, (full, group) => eval('`${' + group + '}`'))
            // The thing is we are supposed to fetch data from context. No exceptions.
            // If you want to call a function - write a getter
            //const tagged = data.replace(/\%(\S+?)\%/gi, (full, group) => this.context[group])
            // *Sigh* rolling back as we need to work with multi-leveling
            const tagged = data.replace(/\%(\S+?)\%/gi, (full, group) => eval('`${this.context.' + group + '}`'))
            switch(key) {
                case 'p':
                    this.cont.cel('p').innerHTML = tagged;//data;
                    break;
                case 'title':
                    this.cont.cel('h2').textContent = tagged;//data;
                    break;
                case 'sub':
                    this.cont.cel('h3').textContent = tagged;//data;
                    break;
                case 'img':
                    this.cont.cel('img').src = `assets/images/${data}.png`;
                    break;
                case 'input':
                    this.cont.cel('input', '', data).oninput = (e) => { 
                        scene.store[data] = e.target.value;
                    };
                    break;
                default:
                    break;
            }
        });
    }
}