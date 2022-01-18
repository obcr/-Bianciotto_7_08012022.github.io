const search = document.getElementById("search");

//   Ecouteur d evenement de recherche dans input avec resultat par apport au tri de l objet recipes
search.addEventListener("keyup", () => {
  const input = search.value;
  console.log(input);

  //   result est egale au resultat LowerCase 'dans recipes' filtré lettres indiquées dans input
  const result = recipes.filter((reponse) =>
    reponse.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  );
  console.log(result);
  let suggestion = "";

  if (input != "") {
    result.forEach(
      (resultResponse) =>
        (suggestion += `
      <div class='suggestion'>${resultResponse.name}</div>
      `)
    );
  }

  document.getElementById("txtSuggestion").innerHTML = suggestion;
});
