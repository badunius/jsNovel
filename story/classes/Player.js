'use strict'

// VS говорит, "да переделай ты это в класс"
// Но нет! Если переписать на класс, то Object.assign растеряет все функции
// А нам ведь нужны функции
export function Player(name) {
    this.name = name;
    this.stats = {
        hp: 12,
        st: 4,
        dx: 4,
        in: 4
    };

    this.getStats = () => ({
        hlt: {name: 'hp', value: this.stats.hp, cap:12, icon: 'health'},
        str: {name: 'st', value: this.stats.st, icon: 'str'},
        dex: {name: 'dx', value: this.stats.dx, icon: 'dex'},
        int: {name: 'in', value: this.stats.in, icon: 'int'},
    });

    return this;
}