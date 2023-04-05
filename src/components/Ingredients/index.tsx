interface IngredientsProps {
  ingredients: string[]
}

function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <header>
      <h1>Liste des ingrédients :</h1>
      <ul className="ingredients_list">
        {ingredients.map((ingredient) => (
          <li
            className="ingredients_list--item"
            key={ingredient}
          >
            {ingredient}
          </li>
        ))}
      </ul>

      {ingredients[0]}
    </header>
  );
}

export default Ingredients;
