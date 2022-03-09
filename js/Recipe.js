class Recipe {
  constructor(dataRecipe) {
    this.id = dataRecipe.id;
    this.name = dataRecipe.name;
    this.ingredients = dataRecipe.ingredients;
    this.description = dataRecipe.description;
    this.time = dataRecipe.time;
    this.appliance = dataRecipe.appliance;
    this.ustensils = dataRecipe.ustensils;
    this.quantity = dataRecipe.quantity;
    this.unit = dataRecipe.unit;
  }
  createHtml() {
    return `
    <div class="recipe">
    <div class="blocImageSupp"><span></span>
      </div>
      <div class="blocElementsHigh">
        <h2>${this.name}</h2>
          <div class="time">
          <i class="far fa-clock" aria-hidden="true"></i>
            <h2>${this.time} min</h2>
          </div>
      </div>
  
        <div class="blocElementsDown">
            <div id="ingredientRecette">
              <ul>${this.ingredients
                .map(
                  (element) => {
                    // `<li class="ingredientRecette__produits">#${element}</li>`
                    console.log(element.ingredient);
                    return `
                    <div class="ingredientRecette">
                    <li class="ingredientRecette__produits"><strong>${element.ingredient}</strong> ${quantityContent} ${unitContent}</li>
                    </div>
                    `
                  }
                  // `<li class="ingredientRecette__produits">#${element}</li>`
                )
                .join("")}</ul>
            </div>
              <div class="descriptionRecette">
                <p>${this.description}</p>
              </div>
        </div>
  
  </div>
      `;
  }
}
