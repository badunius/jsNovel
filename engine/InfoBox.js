'use strict';

export default class InfoBox {
    constructor(container) {
        this.cont = container;
        this.items = {};
    }

    newItem(itemKey) {
        const result = document.createElement('div');
        this.cont.appendChild(result);
        result.className ='item hidden';
        this.items[itemKey] = result;
        return result;
    }

    updateItem(element, itemData) {
        // we should put new data inside an element
        // itemData must have the following fields
        // name: string -- stat name
        // value: number -- current value
        // cap: number -- maximal value
        // icon: string -- corresponding icon
        const {name, value, cap, icon} = itemData;
        const iconTag = icon
            ? `<i class='icon crisp' style='background-image: url("assets/icons/${icon}.png");'></i>`
            : '';
        const nameTag = `<span class='name'>${name}</span>`;
        const valTag = `<span class='value'>${value}</span>`;
        const capTag = `<span class='cap'>${cap ? cap : ''}</span>`;
        element.innerHTML = `${iconTag}<span>${nameTag}${valTag}${capTag}</span>`;
    }

    update(stats = {}) {
        // stats is an object containing all the stats
        // that are supposed to be displayed
        // if some of current stats is not on the list
        // it will be removed (hidden, actually) from infobox

        // hiding existing not listed items
        const existing = Object.keys(this.items);
        existing.forEach(key => {
            if (!stats[key]) {
                this.items[key].classList.add('hidden');
            }
        });

        // updating list, adding new items if necessary
        const actual = Object.keys(stats);
        actual.forEach(key => {
            const element = this.items[key] || this.newItem(key)
            this.updateItem(element, stats[key]);
            element.classList.remove('hidden');
        });
    }
}