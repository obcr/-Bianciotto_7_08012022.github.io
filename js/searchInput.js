const searchNavBar = document.getElementById("searchNavBar");
// console.log("resulSearchBar avant", resultSearchBar);

// Ecouteur d evenement de recherche dans input avec resultat par apport au tri de l objet recipes
searchNavBar.addEventListener("keyup", (e) => {
  const input = searchNavBar.value;
  console.log(recipes);
  console.log(input);
  console.log(e.target.value.length);
  let result = [];

  if (e.target.value.length > 2) {
    for (let i = 0; i < recipes.length; i++) {
      console.log(recipes[i]);
      console.log(recipes[i].ingredients);

      const includeName = recipes[i].name
        .toLowerCase()
        .includes(input.toLowerCase());
      const includeDescription = recipes[i].description
        .toLowerCase()
        .includes(input.toLowerCase());
      let includesIngredient = false;

      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        console.log(recipes[i].ingredients[j].ingredient);
        if (
          recipes[i].ingredients[j].ingredient
            .toLowerCase()
            .includes(input.toLowerCase())
        ) {
          includesIngredient = true;
        }
      }

      if (includeName || includeDescription || includesIngredient) {
        result.push(recipes[i]);
      }
    }

    if (result.length == 0) {
      const alertMessage = document.getElementById("recettes");
      console.log("alert", alertMessage);
      alertMessage.innerHTML = `<div class="cards__no-recipes">
        <p class="cards__no-recipes-text">Aucune recette ne correspond à votre critère… </p>
      </div>`;
    } else displayRecipe(result);
    console.log(result);
  } else displayRecipe(recipes);
  //   result est egale au resultat LowerCase 'dans recipes' filtré lettres indiquées dans input
});

const searchIngredients = document.getElementById("searchIngredients");

//   Ecouteur d evenement de recherche dans input avec resultat par apport au tri de l objet recipes
searchIngredients.addEventListener("keyup", (e) => {
  const itemGroupIngredients = document.querySelectorAll(
    ".item-group-ingredients-item"
  );
  console.log(e.target.value);
  itemGroupIngredients.forEach((item) => {
    console.log(item.innerHTML);
    if (item.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
      // displayRecipe(result);
    }
  });
});

const searchAppareils = document.getElementById("searchAppareils");

searchAppareils.addEventListener("keyup", (e) => {
  const itemGroupAppareils = document.querySelectorAll(
    ".item-group-appareils-item"
  );
  console.log(e.target.value);
  itemGroupAppareils.forEach((item) => {
    console.log(item.innerHTML);
    if (item.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

const searchUstensils = document.getElementById("searchUstensils");

searchUstensils.addEventListener("keyup", (e) => {
  const itemGroupUstensils = document.querySelectorAll(
    ".item-group-ustensils-item"
  );
  console.log(e.target.value);
  itemGroupUstensils.forEach((item) => {
    console.log(item.innerHTML);
    if (item.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
