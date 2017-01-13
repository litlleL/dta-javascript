import { RecipesService } from '../src/services/recipes.service';

describe("RecipesService", function() {
    let recipesService;

    beforeEach(function() {
        recipesService = new RecipesService();
    });

    it("recipesService instance", function() {
        expect(recipesService instanceof RecipesService).toBe(true);
    });

    it("recipesService instance", function(done) {
        recipesService.getRecipes()
            .then(recipes => {
                expect(recipes.length).toBe(3);
                console.log('3', recipes);
                done();
            })
    });
});