const displayButtonListIngredients = (recipes) =>{
    let arrayIngredients = [];
    
    recipes.forEach((recipe) => {
      // code methode 1 decompose ok
      //   console.log(recipe.ingredients);
      recipe.ingredients.forEach((ingredient) => {
        // console.log(ingredient.ingredient);
        arrayIngredients.push(ingredient.ingredient);
      });
    });
    
    // console.log(arrayIngredients);
    arrayIngredients = [...new Set(arrayIngredients)].sort();
    // console.log(arrayIngredients);
    
    // ACHECK AVEC RYADE
    document.querySelector(".item-group-ingredients").innerHTML=" ";

    arrayIngredients.forEach((liIngredient) => {
    //   console.log(liIngredient);
      let li = document.createElement("li");
      li.classList.add("item-group-ingredients-item");      
      document.querySelector(".item-group-ingredients").appendChild(li);
      li.innerHTML = liIngredient;
    });
}
    
const displayButtonListAppareils = (recipes) =>{
    let arrayAppareils = [];

    recipes.forEach((recipe) => {
        // console.log(recipe.appliance);  
        arrayAppareils.push(recipe.appliance);
     
    });
    
    // rappeler tableau
    // console.log(arrayAppareils); 
    arrayAppareils = [...new Set(arrayAppareils)].sort()
    // console.log(arrayAppareils);
    
    
    // ACHECK AVEC RYADE 
    document.querySelector(".item-group-appareils").innerHTML=" ";

    arrayAppareils.forEach((liAppareil) =>{
        // console.log(liAppareil);
    let li = document.createElement("li");
    li.classList.add("item-group-appareils-item");
    document.querySelector(".item-group-appareils").appendChild(li);
    li.innerHTML = liAppareil;
    }
    )
}

const displayButtonListUstensils = (recipes) =>{
    let arrayUstensils = [];

    recipes.forEach((recipe) => {
        // console.log(recipe.ustensils);  
    
        recipe.ustensils.forEach((ustensil) =>{       
            //  console.log(ustensil);
             arrayUstensils.push(ustensil);
         })
    });
     
    // rappeler tableau
    // console.log(arrayUstensils); 
    arrayUstensils = [...new Set(arrayUstensils)].sort()
    // console.log(arrayUstensils);
    
    
    
    // ACHECK AVEC RYADE 
    document.querySelector(".item-group-ustensils").innerHTML=" ";

    arrayUstensils.forEach((liUstensil) =>{
    let li = document.createElement("li");
    li.classList.add("item-group-ustensils-item");
    document.querySelector(".item-group-ustensils").appendChild(li);
    li.innerHTML = liUstensil;
    }
    )

}

displayButtonListIngredients(recipes);
displayButtonListAppareils(recipes);
displayButtonListUstensils(recipes);





