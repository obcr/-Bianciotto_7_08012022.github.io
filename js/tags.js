let resultRecettes = [...recipes];

const tagCreateHtml = `<i id="crossTagsClose" class="far fa-times-circle"></i>`;

const displaytagsSelect = () => {
  const tagsZone = document.querySelector("#tags");
  const itemTagsIngredients = document.querySelectorAll(
    ".item-group-ingredients-item"
  );
  const itemTagsAppareils = document.querySelectorAll(
    ".item-group-appareils-item"
  );
  const itemTagsUstensils = document.querySelectorAll(
    ".item-group-ustensils-item"
  );
  // console.log(tagsZone);

  itemTagsIngredients.forEach((tag) => {
    // console.log(tag);
    tag.addEventListener("click", (e) => {
      console.log("click on ingredient:", e.target.innerHTML);
      // console.log(tagsZone);
      let div = document.createElement("div");
      div.classList.add("tagsIngredient");
      div.setAttribute("tag", e.target.innerHTML);
      // console.log(e.target.innerHTML);
      div.innerHTML += e.target.innerHTML + tagCreateHtml;
      tagsZone.appendChild(div);

      console.log(resultRecettes);

      resultRecettes = resultRecettes.filter((reponse) =>
        reponse.ingredients
          .map((element) => element.ingredient.toLowerCase())
          .includes(e.target.innerHTML.toLowerCase())
      );

      console.log("resultRecettes =", resultRecettes);

      displayRecipe(resultRecettes);
      displayList(resultRecettes);
      console.log("resultRecettes =", resultRecettes);
    });
  });

  itemTagsAppareils.forEach((tag) => {
    // console.log(tag);
    tag.addEventListener("click", (e) => {
      console.log("click on appareil:", e.target.innerHTML);
      console.log(tagsZone);
      let div = document.createElement("div");
      div.classList.add("tagsAppareils");
      // console.log(e.target.innerHTML);
      div.innerHTML += e.target.innerHTML + tagCreateHtml;
      tagsZone.appendChild(div);

      const resultAppareils = recipes.filter((reponse) => {
        // console.log(reponse);
        console.log("Appareil actuel ", reponse.appliance);
        // console.log(reponse);
        console.log("Appareil recherche ", e.target.innerHTML.toLowerCase());
        console.log(
          "Resultat ",
          reponse.appliance
            .toLowerCase()
            .includes(e.target.innerHTML.toLowerCase())
        );
        return reponse.appliance
          .toLowerCase()
          .includes(e.target.innerHTML.toLowerCase());
      });
      console.log(resultAppareils);
      displayRecipe(resultAppareils);
      displayList(resultAppareils);
    });
  });

  itemTagsUstensils.forEach((tag) => {
    // console.log(tag);
    tag.addEventListener("click", (e) => {
      console.log("click on ustensil:", e.target.innerHTML);
      console.log(tagsZone);
      let div = document.createElement("div");
      div.classList.add("tagsUstensils");
      // console.log(e.target.innerHTML);
      div.innerHTML += e.target.innerHTML + tagCreateHtml;
      tagsZone.appendChild(div);

      const resultUstensils = recipes.filter((reponse) =>
        reponse.ustensils
          .map((element) => element.toLowerCase())
          .includes(e.target.innerHTML.toLowerCase())
      );
      console.log(resultUstensils);
      displayRecipe(resultUstensils);
      displayList(resultUstensils);
    });
  });
};

displaytagsSelect();

function displayList() {
  displayButtonListIngredients(resultRecettes);
  displayButtonListAppareils(resultRecettes);
  displayButtonListUstensils(resultRecettes);

  displaytagsSelect();

  const crossTagsIngredientClose = document.querySelectorAll(".tagsIngredient");
  const crossTagsAppareilsClose = document.querySelectorAll(".tagsAppareils");
  const crossTagsUstensilsClose = document.querySelectorAll(".tagsUstensils");

  crossTagsIngredientClose.forEach((tag) => {
    // console.log("test install event", crossTagsIngredientClose);
    tag.addEventListener("click", () => {
      console.log("test int event", tag);
      // Je remove le tag
      tag.remove();
      // on recupere toutes les recettes par defaut
      let recipesToDisplay = recipes;

      // console.log(e.target);

      const searchNavBar = document.getElementById("searchNavBar");

      // 1 refaire recherche principale search input copier coller
      if (searchNavBar.value.length > 2) {
        console.log("Searchnavbartest");
        recipesToDisplay = recipes.filter(
          (reponse) =>
            reponse.name
              .toLowerCase()
              .includes(searchNavBar.value.toLowerCase()) ||
            reponse.description
              .toLowerCase()
              .includes(searchNavBar.value.toLowerCase()) ||
            reponse.ingredients
              .map((element) => element.ingredient.toLowerCase())
              .includes(searchNavBar.value.toLowerCase())
        );
      }
      // affiche a nouveau les recettes
      // console.log(recipesToDisplay);

      // 2 retouver recuperer list des tags qui sont affiche dans la zontags documentQuerySelectorAll

      const tagslistIngredients = document.querySelectorAll(".tagsIngredient");
      // console.log("tagslistIngredients", tagslistIngredients);

      tagslistIngredients.forEach((tag) => {
        // console.log(tag);
        recipesToDisplay = recipesToDisplay.filter((reponse) =>
          reponse.ingredients
            .map((element) => element.ingredient.toLowerCase())
            .includes(tag.getAttribute("tag").toLowerCase())
        );
      });

      resultRecettes = [...recipesToDisplay];

      console.log("resultRecettes =", resultRecettes);
      console.log("recipeToDisplay =", recipesToDisplay);

      displayRecipe(recipesToDisplay);

      displayButtonListIngredients(recipesToDisplay);
      displayButtonListAppareils(recipesToDisplay);
      displayButtonListUstensils(recipesToDisplay);

      displaytagsSelect();
    });
  });
  crossTagsAppareilsClose.forEach((tag) => {
    tag.addEventListener("click", () => {
      console.log("test int event", tag);
      // Je remove le tag
      tag.remove();
      // on recupere toutes les recettes par defaut
      let recipesToDisplay = recipes;

      // console.log(e.target);

      const searchNavBar = document.getElementById("searchNavBar");

      // 1 refaire recherche principale search input copier coller
      if (searchNavBar.value.length > 2) {
        console.log("Searchnavbartest");
        recipesToDisplay = recipes.filter(
          (reponse) =>
            reponse.name
              .toLowerCase()
              .includes(searchNavBar.value.toLowerCase()) ||
            reponse.description
              .toLowerCase()
              .includes(searchNavBar.value.toLowerCase()) ||
            reponse.ingredients
              .map((element) => element.ingredient.toLowerCase())
              .includes(searchNavBar.value.toLowerCase())
        );
      }
      // affiche a nouveau les recettes
      console.log(recipesToDisplay);
      displayRecipe(recipesToDisplay);

      // 2 retouver recuperer list des tags qui sont affiche dans la zontags document>queryselectorall

      const tagslistAppareils = document.querySelectorAll(".tagsAppareils");
      console.log("tagslistAppareils", tagslistAppareils);

      tagslistAppareils.forEach((tag) => {
        console.log(tag.getAttribute("tag"));

        recipesToDisplay = recipesToDisplay.filter((reponse) =>
          reponse.ingredients
            .map((element) => element.ingredient.toLowerCase())
            .includes(tag.getAttribute("tag").toLowerCase())
        );
        console.log(recipesToDisplay);
      });

      displayRecipe(recipesToDisplay);

      displayButtonListIngredients(recipesToDisplay);
      displayButtonListAppareils(recipesToDisplay);
      displayButtonListUstensils(recipesToDisplay);

      displaytagsSelect();
    });
    //}
  });
  crossTagsUstensilsClose.forEach((tag) => {
    tag.addEventListener("click", () => {
      console.log("test int event", tag);
      // Je remove le tag
      tag.remove();
      // on recupere toutes les recettes par defaut
      let recipesToDisplay = recipes;

      // console.log(e.target);

      const searchNavBar = document.getElementById("searchNavBar");

      // 1 refaire recherche principale search input copier coller
      if (searchNavBar.value.length > 2) {
        console.log("Searchnavbartest");
        recipesToDisplay = recipes.filter(
          (reponse) =>
            reponse.name
              .toLowerCase()
              .includes(searchNavBar.value.toLowerCase()) ||
            reponse.description
              .toLowerCase()
              .includes(searchNavBar.value.toLowerCase()) ||
            reponse.ingredients
              .map((element) => element.ingredient.toLowerCase())
              .includes(searchNavBar.value.toLowerCase())
        );
      }
      // affiche a nouveau les recettes
      console.log(recipesToDisplay);
      displayRecipe(recipesToDisplay);

      // 2 retouver recuperer list des tags qui sont affiche dans la zontags document>queryselectorall

      const tagslistUstensils = document.querySelectorAll(".tagsUstensils");
      console.log("tagslistUstensils", tagslistUstensils);

      tagslistUstensils.forEach((tag) => {
        console.log(tag.getAttribute("tag"));

        recipesToDisplay = recipesToDisplay.filter((reponse) =>
          reponse.ingredients
            .map((element) => element.ingredient.toLowerCase())
            .includes(tag.getAttribute("tag").toLowerCase())
        );
        console.log(recipesToDisplay);
      });

      displayRecipe(recipesToDisplay);

      displayButtonListIngredients(recipesToDisplay);
      displayButtonListAppareils(recipesToDisplay);
      displayButtonListUstensils(recipesToDisplay);

      displaytagsSelect();
    });
    //}
  });
}
