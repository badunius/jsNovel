export const GAME_WELCOME = {
    // scene description (can be a getter function)
    get description () {
        // we can access a context at this point
        return [
            {'p': 'Hello, %playerName%, and welcome... no, not the City-17 you fool...'}
        ];
    },
    // this is an icon above the actions
    icon: 'menu',
    // list of actions
    actions: [
        {
            caption: '...',
            handler: () => {}
        }
    ]
}