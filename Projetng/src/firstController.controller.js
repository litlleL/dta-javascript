export class MyFirstController {

    constructor(SuperService, Version) {
        this.version = Version;
        this.UserService = SuperService;

        this.UserService.getUsers()
            .then(users => {
                this.users = users;
            });
        this.clicked = false;
        this._initUser()
    }

    startWithT(user) {
        return user.name[0] === 'T';
    }

    show(user) {
        user.show = true;
    }

    order(order) {
        if (this.orderPred === order) {
            this.reverse = !this.reverse;
        }
        this.orderPred = order;
    }


    save(form, user) {
        if (form.$invalid) return;

        this.UserService.saveUser(user)
            .then(user =>
                this.upsert(user)
            )
            .then(() => {
                this._initUser();
                form.$setPristine(true);
            });
    }

    // ajoute user à this.users si non trouvé, le modifie si trouvé 
    upsert(user) {
        let _user = this.users.find(u => u.id === user.id);
        console.log(_user);
    }

    delete(user) {
        user.deleted = true;
        this.UserService.deleteUser(user)
            .then(() =>
                this.users = this.users
                .filter(userToLet =>
                    userToLet.id !== user.id
                )
            )
    }
    edit(user) {
        this.userAdd = angular.copy(user);
    }
    cancel() {
        this._initUser();
    }

    _initUser() {
        this.userAdd = { name: '', age: 0 };
    }
}