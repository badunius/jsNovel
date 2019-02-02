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
            handler: () => 'GAME_WELCOME'
        },
        {
            caption: 'Cancel',
            handler: () => 'MENU_MAIN'
        }
    ]
}