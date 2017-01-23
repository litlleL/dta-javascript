export class UsersController {
    constructor(UserService, Version, $timeout) {

        this.UserService = UserService;
        this.version = Version;
        this.$timeout = $timeout;
        this.undo = {};
        this.predicat = 'name';
        this.reverse = false;

        this.UserService.getUsers()
            .then(users => {
                this.users = users;
                console.table(users);
            });

    }

    order(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }


    deleteUser(user) {

        this.undo[user.id] = this.$timeout(5000);
        this.undo[user.id].then(() => {
            this.users = this.users.filter(u => u.id !== user.id);
            this.UserService.deleteUser(user)
            delete this.undo[user.id];
        }, () => {
            delete this.undo[user.id];
        });
    }

    cancelDelete(user) {
        this.$timeout.cancel(this.undo[user.id]);
    }

    deactivate() {
        console.log('deactivate');
    }

}