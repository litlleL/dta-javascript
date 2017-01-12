class RecipesService {
    constructor() {
        this.recipes = null;
    }

    // return Promise<[recipe]>
    getRecipes() {
        if (this.recipes) return Promise.resolve(this.recipes);

        return fetch('http://localhost:3000/recipes')
            .then(response => response.json())
            .then(recipes => this.recipes = recipes);
    }

    /*compare(element1, element2) {
        let array = [];
        element1.forEach(function(item) {
            let contenu = element2.filter(function(items) {
                return item === items;
            });
            if (contenu.length != 0) {
                array.push(contenu)
            }
        });
        return array;
    }

    isRecipeCompliant(recipe, pizza) {
        if (pizza.length !== recipe.length) {
            return false;
        }

        let array = this.compare(pizza, recipe);

        if (array.length !== recipe.length) {
            return false;
        } else {
            let array = this.compare(recipe, pizza);
            let bool = (array.length !== recipe.length) ? false : true;
            return bool;
        }
    }*/

    isRecipeCompliant(recipe, pizza) {
        if (recipe.toppings.length !== pizza.toppings.length) return false;

        return pizza.toppings.reduce((acc, topping) =>
            acc &&
            recipe.toppings.indexOf(topping) !== -1 &&
            pizza.toppings.indexOf(topping) === pizza.toppings.lastIndexOf(topping), true);
    }

    getPizzaRecipeName(pizza) {
        return this.getRecipes()
            .then(recipes => {
                return recipes.reduce(
                    (acc, recipe) =>
                    acc ||
                    (this.isRecipeCompliant(recipe, pizza) ? recipe.name : false),
                    false);
            })
    }

    getRecipe(name) {
        return this.getRecipes()
            .then(recipes => recipes.find(recipe => recipe.name === name))
            .catch(this.handleError)
    }

    getRecipesNames() {
        return this.getRecipes()
            .then(recipes => recipes.map(recipe => recipe.name))
            .catch(this.handleError)
    }

    queryRecipes(query) {
        return this.getRecipes()
            .then(recipes =>
                recipes
                .filter(recipe =>
                    recipe.name.toLowerCase().includes(query.toLowerCase())
                )
            );
    }

    handleError(err) {
        alert('Une erreur est survenue')
    }
}

class PizzeriaService {

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