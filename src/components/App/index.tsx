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

  console.log('Recettes : ', recipes);

  return (
    <div className="app">

      <Header />

      <Ingredients />

      <Informations />

      <Recipe />

      <Footer />

    </div>
  );
}

export default App;
