import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Character from './components/characters/Character';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      // console.log(response.data);
      setItems(response.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <Character isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
