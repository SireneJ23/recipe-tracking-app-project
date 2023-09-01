import React, {useState} from "react";

function RecipeCreate({createRecipe}) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", name, cuisine, photo, ingredients, preparation);
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form class="create" name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                placeholder="Name"
                name="name"
                type="text"
                required={true}
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                type="text"
                required={true}
                onChange={(event) => setCuisine(event.target.value)}
                value={cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                placeholder="URL"
                type="url"
                required={true}
                onChange={(event) => setPhoto(event.target.value)}
                value={photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                placeholder="Ingredients"
                name="ingredients"
                required={true}
                onChange={(event) => setIngredients(event.target.value)}
                value={ingredients}
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                placeholder="Preparation"
                name="preparation"
                required={true}
                onChange={(event) => setPreparation(event.target.value)}
                value={preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
