export const MENU_MAIN = {
    // scene description (can be a getter function)
    get description () {
        // we can access a context at this point
        return [
            {'title':'Main menu'},
            {'p': 'This is a simple demo for the testing purposes'}
        ];
    },
    // this is an icon above the actions
    icon: 'menu',
    // list of actions
    actions: [
        {
            caption: 'Start',
            handler: () => 'MENU_INTRO'
        },
        {
            caption: 'Load',
            handler: () => 'MENU_LOAD'
        },
        {
            caption: 'Config',
            handler: () => 'MENU_CONFIG'
        },
        {
            caption: 'About',
            handler: (scene) => 'MENU_ABOUT'
        }
    ]
}