export const MENU_LOAD = {
    // scene description (can be a getter function)
    get description () {
        // we can access a context at this point
        const desc = [{'title':'Load a previously saved game:'}]
        const stored = JSON.parse(localStorage.getItem(this.context.storeKey) || '{}');
        const saved = stored.saved || [];

        saved.forEach((element, index) => {
            desc.push(
                {'sub':`Slot#${index}`},
                {'p':element.title}
            )
        });
        return desc;
    },
    // this is an icon above the actions
    icon: 'menu',
    // list of actions
    actions: [
        {
            caption: 'Cancel',
            handler: () => 'MENU_MAIN'
        }
    ]
}