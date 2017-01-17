const api = 'http://localhost:3000/users';

export class UserService {
    constructor($http, $timeout) {
        this.$http = $http;
        this.$timeout = $timeout;
    }

    getUsers() {
        return this.$http.get(api)
            .then(response => response.data);
    }

    addUser(user) {
        return this.$http.post(api, user)
            .then(response => response.data);
    }

    deleteUser(user) {
        return this.$http.delete(`${ api }/${ user.id }`)
            .then(response => response.data);
    }

    editUser(user) {
        return this.$http.put(`${ api }/${ user.id }`, user)
            .then(response => response.data);
    }

    saveUser(user) {
        return this[user.id ? 'editUser' : 'addUser'](user);
    }

}