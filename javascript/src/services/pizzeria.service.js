export class PizzeriaService {

    constructor(recipesService) {
        this.pool = [];
        this.recipesService = recipesService;
    }

    start(time) {
        // every time seconds add a new recipe name to the pool
        this.recipesService.getRecipesNames()
            .then(recipesNames => {
                const intervalId = setInterval(() => {
                    const index = Math.floor(Math.random() * recipesNames.length);
                    const recipeName = recipesNames[index];
                    this.pool.push(recipeName);
                    console.log('POOL : ', this.pool);
                    const pooldiv = $('#pool');
                    pooldiv.html(this.pool.join('<br>'));
                    if (this.pool.length >= 10) {
                        alert('GAME OVER');
                        clearInterval(intervalId);
                    }
                }, time);

            })
    }

    // { id: 1, toppings: ['', ''] }
    sendPizza(pizzaName) {
        const idx = this.pool.indexOf(pizzaName);
        if (idx !== -1) this.pool.splice(idx, 1);
    }

}