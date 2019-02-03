export const MENU_CONFIG = {
    // scene description (can be a getter function)
    get description () {
        // we can access a context at this point
        return [
            {'title':'Game options'},
            {'p': 'This is just a demo what kind of options did you expect? O_o'}
        ];
    },
    // this is an icon above the actions
    icon: 'config',
    // list of actions
    actions: [
        {
            caption: 'Cancel',
            handler: () => ({scene: 'MENU_MAIN'})
        }
    ]
}