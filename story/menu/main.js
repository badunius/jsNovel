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
            handler: () => ({scene: 'MENU_INTRO'})
        },
        {
            caption: 'Load',
            handler: () => ({scene: 'MENU_LOAD'})
        },
        {
            caption: 'Config',
            handler: () => ({scene: 'MENU_CONFIG'})
        },
        {
            caption: 'About',
            handler: (scene) => ({scene: 'MENU_ABOUT'})
        }
    ]
}