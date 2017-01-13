import { RecipesService } from './services/recipes.service';
import { PizzeriaService } from './services/pizzeria.service';


const recipesService = new RecipesService();
const pizzeriaService = new PizzeriaService(recipesService);

console.log('test')
pizzeriaService.start(1000);
console.log('ein')