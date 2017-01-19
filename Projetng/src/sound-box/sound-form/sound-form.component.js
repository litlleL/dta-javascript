class SoundFormController {
    constructor() {

    }

    add(form, src) {
        if (form.$invalid) return;
        this.onAdd({
            $event: src
        });
    }
}

export const SoundForm = {
    bindings: {
        onAdd: '&'
    },

    template: require('./sound-form.component.html'),
    controller: SoundFormController

}