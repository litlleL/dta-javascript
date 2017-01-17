export class MyFirstController {

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
    save(form, userAdd) {
        if (form.$invalid) return;

        this.users.push({
            name: userAdd.nom,
            age: userAdd.age
        })

        console.log(this.users)
    }

}