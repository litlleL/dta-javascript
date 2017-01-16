angular.module('app', [])

.run(function() {
    console.log('PizzaYOLO !');
})

.controller('MyFirstController', class MyFirstController {

    constructor() {
        this.name = '';
        this.users = [{
                name: 'thomas',
                age: '32'
            },
            {
                name: 'georges',
                age: '25'
            },
            {
                name: 'jean',
                age: '48'
            },
            {
                name: 'theo',
                age: '2'
            },
            {
                name: 'nicolas',
                age: '72'
            }
        ]
        this.clicked = false;
    }

    startWithT(user) {
        return user.name[0] === 'T';
    }

    filterUsers() {
        this.users.filter(this.startWithT);
    }

    show(user) {
        user.show = true;
    }

    classApplicator() {
        this.clicked = !this.clicked;
    }

    filter() {
        return this.users.filter(user => user.name.includes(this.name));
    }

    order(order) {
        if (this.orderPred === order) {
            this.reverse = !this.reverse;
        }
        this.orderPred = order;
    }

})

.filter('exclam', function() {
    return (input, size = 1) => {
        if (typeof input !== 'string') return '';
        return input + '!'.repeat(size);
    }
})