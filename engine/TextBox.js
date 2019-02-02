'use strict';

export class TextBox {
    constructor(container, context = {}) {
        this.cont = container;
        this.context = context;
    }

    clear() {
        this.cont.innerHTML = '';
    }

    putText(lines) {
        // lines is supposed to be an array of objects
        lines.forEach(element => {
            const key = Object.keys(element)[0];
            const data = element[key];
            // (deprecated)       replacing %tag% with an evaluation of ${tag}      
            //const tagged = data.replace(/\%(\S+?)\%/gi, (full, group) => eval('`${' + group + '}`'))
            // The thing is we are supposed to fetch data from context. No exceptions.
            // If you want to call a function - write a getter
            const tagged = data.replace(/\%(\S+?)\%/gi, (full, group) => this.context[group])
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
                        this.context[data] = e.target.value;
                    };
                    break;
                default:
                    break;
            }
        });
    }
}