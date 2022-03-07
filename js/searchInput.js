const searchNavBar = document.getElementById("searchNavBar");

//   Ecouteur d evenement de recherche dans input avec resultat par apport au tri de l objet recipes
searchNavBar.addEventListener("keyup", (e) => {
  const input = searchNavBar.value;
  console.log(recipes);
  console.log(input);
  console.log(e.target.value.length);
  if (e.target.value.length > 2) {
    const result = recipes.filter(
      (reponse) =>
        reponse.name.toLowerCase().includes(input.toLowerCase()) ||
        reponse.description.toLowerCase().includes(input.toLowerCase()) ||
        reponse.ingredients
          .map((element) => element.ingredient.toLowerCase())
          .includes(input.toLowerCase())
    );
    resultRecettes = [...result];
    console.log(result);
    displayRecipe(result);
    displayList();

    if (result.length == 0) {
      const alertMessage = document.getElementById("recettes");
      console.log("alert", alertMessage);
      alertMessage.innerHTML = `<div class="cards__no-recipes">
        <p class="cards__no-recipes-text">Aucune recette ne correspond à votre critère… </p>
      </div>`;
    }
  } else {
    resultRecettes = [...recipes];
    console.log(resultRecettes);
    displayRecipe(recipes);
    displayList();
  }

  //   result est egale au resultat LowerCase 'dans recipes' filtré lettres indiquées dans input
});

// return alertMessage.innerHTML(
//   `<div class="cards__no-recipes">
//   <p class="cards__no-recipes-text">Aucune recette ne correspond à votre critère… </p>
// </div>`
// );

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
