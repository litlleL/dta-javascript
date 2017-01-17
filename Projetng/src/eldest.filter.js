export function eldestAgeFilter() {

    return (function(user) {
        var array = user
        var tab = array.map(items => items.age)
        var max = Math.max(...tab)
        return max;
    })
}

export function eldestFilter() {
    return (users) => {
        if (!users instanceof Array) return '';

        let max = users[0];
        users.forEach((user) => {
            if (user.age && user.age > max.age) max = user;
        });

        return max.name;

        // const eldest = users.reduce((max, user) => {
        //     if (user.age && user.age > max.age) return user;
        //     return max;
        // }, {name: '', age: 0});

        // return eldest.name;
    }
}