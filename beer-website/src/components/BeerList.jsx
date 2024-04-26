// BeerList.jsx
import React, { useEffect, useState } from 'react';
import { fetchBreweries } from './api'; 

const BeerList = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const getBreweries = async () => {
      try {
        const data = await fetchBreweries();
        setBreweries(data);
      } catch (error) {
        console.error('Error fetching breweries:', error);
      }
    };

    getBreweries();
  }, []);

  return (
    <div>
      <h2>Breweries</h2>
      <ul>
        {breweries.map(brewery => (
          <li key={brewery.id}>{brewery.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BeerList;
