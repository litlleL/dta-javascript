class DtaUserController {

    constructor() {}

    $onChanges(changes) {
        this.user = angular.copy(this.user);
    }

    saveUser(form, user) {
        if (form.$invalid) return;
        this.onSubmit({
            $event: user
        });
    }
}

export const DtaUser = {
    bindings: {
        user: '<',
        onSubmit: '&'
    },
    template: require('./dta-user.component.html'),
    controller: DtaUserController
}