import { RecipesService } from './services/recipes.service';
import { PizzeriaService } from './services/pizzeria.service';


const recipesService = new RecipesService();
const pizzeriaService = new PizzeriaService(recipesService);

let myPizza;
//pizzeriaService.start(1000);
recipesService
    .getRecipesNames()
    .then(recipes => {
        $('#recipes')
            .html(recipes
            .map(recipe => 
            `<li style= "list-style-type:none;" data-recipe="${ recipe }"> 
            <button class="btn btn-primary  btn-block">${ recipe }</button></li>`)
            .join('')
                    );

        $('#recipes li').on('click', function() {
            recipesService
                .getRecipe($(this).data('recipe'))
                .then(recipe => {
                    $('#OneRecipe')
                        .html(recipe.toppings
                            .map(topping => `<li style= "list-style-type:none;" >${ topping }</li>`)
                            .join('')
                        )
                });
        });
    });

recipesService.getToppings()
    .then(toppings => {
        $('#toppings')
            .html(toppings.map(topping => `
        <button data-topping="${ topping }" class="btn">${ topping }</button>
        <img id="${ topping }" src="dist/img/${ topping }.jpg" class="img-circle" height="60" width="60"></img>
        `));
        $('#toppings button').click(function() {
            addTopping($(this).data('topping'));
        });

    });

$('#start').on('click', function() {
    console.log('ici');
    $(this).hide();
    myPizza = {
        toppings: []
    };
    pizzeriaService.start(3000);
});

function addTopping(topping) {
    myPizza.toppings.push(topping);
    $('#pizza')
        .html(
            myPizza.toppings.join('</br>')
        );
    console.log(myPizza)
}

$('#send').on('click', function() {
    recipesService
        .getPizzaRecipeName(myPizza)
        .then(recipeName => {
            console.log(recipeName);
            myPizza = {
                toppings: []
            };
            $('#pizza').html('');
            if (recipeName) {
                pizzeriaService.sendPizza(recipeName)
            }
        })
});