class Ingredient {
  constructor(dataRecipe) {
    this.id = dataRecipe.id;
    this.name = dataRecipe.name;
    this.ingredients = dataRecipe.ingredients;
  }

  createIngredientsHtml() {
    return `
        
        <div class="btnBlueOpenIngredients">
        <p>${this.ingredients}BLABLA</p>
        </div>
        
        `;
  }
}
