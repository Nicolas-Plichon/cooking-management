import { useState } from 'react';
import recipesData from '../../data/recipes';
import './styles.scss';
import Header from '../Header';
import Ingredients from '../Ingredients';
import Informations from '../Informations';
import Recipe from '../Recipe';
import Footer from '../Footer';

function App() {
  // Je charge les recettes dans mon state
  const [recipes] = useState(recipesData);
  const selectedRecipe = recipes[0]; // Pour tester sur la première recette

  return (
    <div className="app">

      <Header />

      <Informations
        name={selectedRecipe.name}
        time={selectedRecipe.time}
        difficulty={selectedRecipe.difficulty}
      />

      <Ingredients
        ingredients={selectedRecipe.ingredients}
      />

      <Recipe
        steps={selectedRecipe.preparation}
      />

      <Footer />

    </div>
  );
}

export default App;
