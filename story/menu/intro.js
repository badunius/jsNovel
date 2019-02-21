import { Player } from "../classes/Player.js";

export const MENU_INTRO = {
    // GETTING READY TO START A NEW GAME
    get description () {
        return [
            {'title':'Enter your name'},
            {'input': 'playerName'}
        ];
    },
    // this is an icon above the actions
    icon: 'menu',
    // list of actions
    actions: [
        {
            caption: 'Next',
            handler: (e) => ({
                scene: 'GAME_WELCOME',
                context: {
                    player: new Player(e.store.playerName)
                }
            })
        },
        {
            caption: 'Cancel',
            handler: () => ({scene: 'MENU_MAIN'})
        }
    ]
}