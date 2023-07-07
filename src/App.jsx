import './App.css'
import PizzaList from './pages/PizzaList';
import { useState, useEffect } from "react";

function App() {
  const [friends, setFriends] = useState([
    {
      name: 'Felix',
      noGos: ['tomatoes', 'eggs'],
      preferences: ['basil', 'mozzarella'],
    },
    {
      name: 'Ilja',
      noGos: ['mushrooms', 'spinach'],
      preferences: ['parmesan', 'eggs'],
    }
  ]);

  const [pizzaOffers, setPizzaOffers] = useState([
    {
      id: 1,
      name: 'Margherita',
      toppings: ['tomatoes', 'mozzarella', 'oregano', 'basil'],
    },
    {
      id: 2,
      name: 'Marinara',
      toppings: ['tomatoes', 'garlic', 'basil', 'oregano']
    }
  ]);
  return (
    <div className="App">
      <PizzaList
        pizzaOffers={pizzaOffers}
        friends={friends}
      />

    </div>
  );
}

export default App;
