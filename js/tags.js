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

  tagsZone.innerHTML = " ";

  itemTagsIngredients.forEach((tag) => {
    // console.log(tag);
    tag.addEventListener("click", (e) => {
      let div = document.createElement("div");
      div.classList.add("tagsIngredient");
      div.setAttribute("tag", e.target.innerHTML);
      // console.log(e.target.innerHTML);
      div.innerHTML += e.target.innerHTML + tagCreateHtml;
      tagsZone.appendChild(div);

      const resultRecettes = recipes.filter((reponse) =>
        reponse.ingredients
          .map((element) => element.ingredient.toLowerCase())
          .includes(e.target.innerHTML.toLowerCase())
      );


      // console.log(resultRecettes);

      // displayButtonListIngredients(resultRecettes);
      // displayButtonListAppareils(resultRecettes);
      // displayButtonListUstensils(resultRecettes);


      displayRecipe(resultRecettes);


      const crossTagsClose = document.querySelectorAll(".tagsIngredient");

      crossTagsClose.forEach((tag) => {
        // console.log(e.target.innerHTML);
        // console.log(tag.getAttribute("tag"));
        if (tag.getAttribute("tag")==e.target.innerHTML) {
          // console.log("test install event", crossTagsClose);
          tag.addEventListener("click", () => {
            // console.log("test int event", crossTagsClose);
            // Je remove le tag
            div.remove();
            // on recupere toutes les recettes par defaut
            let recipesToDisplay = recipes
            
            // console.log(e.target);
            
            const searchNavBar = document.getElementById("searchNavBar");
            
            // 1 refaire recherche principale search input copier coller
            if (searchNavBar.value.length>2){
              console.log("Searchnavbartest");
              recipesToDisplay = recipes.filter((reponse) =>
              reponse.name.toLowerCase().includes(searchNavBar.value.toLowerCase())||
              reponse.description.toLowerCase().includes(searchNavBar.value.toLowerCase())||
              reponse.ingredients.map(element=>element.ingredient.toLowerCase()).includes(searchNavBar.value.toLowerCase())
            );
            }
            console.log(recipesToDisplay);

// 2 retouver recuperer list des tags qui sont affiche dans la zontags document>queryselectorall

            const tagslist = document.querySelectorAll(".tagsIngredient");
            console.log("tagslist", tagslist);
      
            tagslist.forEach((tag) => {
              console.log(tag.getAttribute("tag"));
              
              recipesToDisplay = recipesToDisplay.filter((reponse) =>
              reponse.ingredients
                .map((element) => element.ingredient.toLowerCase())
                .includes(tag.getAttribute("tag").toLowerCase())
            );
            console.log(recipesToDisplay);
              // tag.addEventListener("click", (e) => {
              //   console.log(e.target.innerHTML);
              //           if (tag.getAttribute("tag") === e.target.innerHTML) {
              //   console.log(tag);
              // }
              // });
            });


// 3 filtre les recettes suivant la list des tag dans la zone tags a voir filter const resultRecettes
// 4 displayrecipes (recipesToDisplay)
// 5 displayButtonListIngredients(recipesToDisplay);
// 5 displayButtonListA(recipesToDisplay);
// 5 displayButtonListU(recipesToDisplay);
        });
      }

      });
    });
  });

  itemTagsAppareils.forEach((tag) => {
    // console.log(tag);
    tag.addEventListener("click", (e) => {
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
    });
  });

  itemTagsUstensils.forEach((tag) => {
    // console.log(tag);
    tag.addEventListener("click", (e) => {
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
    });
  });
};

displaytagsSelect();
