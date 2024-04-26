// App.jsx
import React, { useState } from 'react';
import { fetchBeerImages } from './components/api'; // Assuming the API function is in api.js

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [beerImages, setBeerImages] = useState([]);

  const handleSearch = async () => {
    try {
      // Call the fetchBeerImages function with the search term
      const images = await fetchBeerImages(searchTerm);
      setBeerImages(images);
    } catch (error) {
      console.error('Error fetching beer images:', error);
      // Handle error
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter beer name"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {beerImages.map((image, index) => (
          <img key={index} src={image} alt={`Beer ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default App;
