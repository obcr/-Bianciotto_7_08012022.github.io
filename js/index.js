const displayRecipe = (recipes) => {
  const recettes = document.getElementById("recettes");
  recettes.innerHTML = "";
  for (let recipe of recipes) {
    let newRecipe = new Recipe(recipe);
    // console.log(photographerId.photographersIndexPage())
    recettes.innerHTML += newRecipe.createHtml();
  }
};

const ingredient = document.querySelector(".ingredient__icon");
const btnBlue = document.querySelector(".btnBlue");

ingredient.addEventListener("click", () => {
  console.log(ingredient, "ingredient");
  btnBlue.style.display = "none";

  // displayIngredient();
});

// function displayIngredient(recipes) {
//   const buttonOpenIngredients = document.querySelector(".ingredientOpen");
//   buttonOpenIngredients.innerHTML = "";
//   for (let recipe of recipes) {
//     let newIngredient = new Ingredient(recipe);
//     buttonOpenIngredients.innerHTML += newIngredient.createIngredientHtml();
//   }
// }

const displayIngredient = () => {
  const buttonOpenIngredients = document.querySelector(".ingredientOpen");
  buttonOpenIngredients.innerHTML = "";

  let newRecipe = new Recipe();
  // console.log(photographerId.photographersIndexPage())
  buttonOpenIngredients.innerHTML += newRecipe.createHtml();
};

const init = async () => {
  displayRecipe(recipes);
  // displayIngredient(recipes);
};
init();
