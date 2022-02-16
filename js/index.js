const displayRecipe = (recipes) => {
  const recettes = document.getElementById("recettes");
  recettes.innerHTML = "";
  for (let recipe of recipes) {
    let newRecipe = new Recipe(recipe);
    // console.log(newRecipe)
    recettes.innerHTML += newRecipe.createHtml();
  }
};

const init = async () => {
  displayRecipe(recipes);
};
init();
