import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import Character from './components/characters/Character';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(response.data);
      setItems(response.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={q => setQuery(q)} />
      <Character isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
