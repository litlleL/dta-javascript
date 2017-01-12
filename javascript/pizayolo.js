class RecipesService {
    constructor() {

    }

    getRecipes() {

        return fetch('http://localhost:3000/recipes')
            .then(response => response.json());

    }

    isRecipeCompliant(recipe, pizza) {
        if (pizza.length !== recipe.length) {
            return false;
        }

        let array = [];
        pizza.forEach(function(item) {
            let contenu = recipe.filter(function(items) {
                return item === items;
            });
            if (contenu.length != 0) {
                array.push(contenu)
            }
        });

        if (array.length !== recipe.length) {
            return false;
        } else {

            let array2 = [];
            recipe.forEach(function(item) {
                let contenu = pizza.filter(function(items) {
                    return item === items;
                });
                if (contenu.length != 0) {
                    array2.push(contenu)
                }
            });
            if (array2.length !== recipe.length) {
                return false;
            } else {
                return true;
            }
        }
    }

    getRecipe(name) {

        return this.getRecipes()
            .then(recipes => recipes.find(recipe => recipe.name === name));

    }

    getRecipesNames() {

        return this.getRecipes()
            .then(recipes => recipes.map(recipe => recipe.name))

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

}