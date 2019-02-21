export const GAME_WELCOME = {
    // scene description (can be a getter function)
    get description () {
        // checking dialog stage
        if (!this.context.dialog) {
            this.context.dialog = 0;
        }
        // displaying text for the current stage
        return phrases[this.context.dialog];
    },
    // this is an icon above the actions
    icon: 'mystfig',
    // list of actions
    get actions () {
        // now we have a dialog stage set anyway
        return answers[this.context.dialog];
    }
}

const phrases = {
    0: [
        {'p':'<em>You find yourself in the middle of literally nowhere. Suddenly a mysterious figure appears.</em>'},
        {'p':'Hello, %player.name%, and welcome... no, not to the City-17 you fool... Does it look like a city to you?'}
    ],
    100: [
        {'p':'Look, I\'m not going to pussyfoot you. I need a favor, and you have no choice.'},
        {'p':'Retrieve three stones for me...'}
    ],
    200: [
        {'p':'What? No, not infinity ones, and yes, just three.'},
        {'p':'Now go, waste no time.'}
    ],
    300: [
        {'p':'I don\'t know "Where to"! It\'s up to you now.'},
        {'p':'<em>It waves hands at you</em>'}
    ]
}

const answers = {
    0: [{
        caption: '…',
        handler: (e) => ({ context: {dialog: 100}, scene: 'GAME_WELCOME', stats: e.context.player.getStats()})
    }],
    
    100: [{
        caption: 'Infinity',
        handler: (e) => ({ context: {dialog: 200}, scene: 'GAME_WELCOME', stats: e.context.player.getStats()})
    }],
    
    200: [{
        caption: 'Where to?',
        handler: (e) => ({ context: {dialog: 300}, scene: 'GAME_WELCOME',  stats: e.context.player.getStats()})
    }],
    
    300: [{
        caption: 'Leave',
        handler: (e) => ({ context: {dialog: null}, scene: 'GAME_WILDERNESS', stats: e.context.player.getStats()})
    }]
}