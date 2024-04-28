import React, { useState } from 'react';
import { fetchBeerImages } from './components/api';
import backgroundImage from './beer-image1.jpg';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [beerImages, setBeerImages] = useState([]);

  const handleSearch = async () => {
    try {
      const images = await fetchBeerImages(searchTerm);
      setBeerImages(images);
    } catch (error) {
      console.error('Error fetching beer images:', error);
    }
  };

  const handleHome = () => {
    setSearchTerm('');
    setBeerImages([]);
  };

  const handleMoreInfo = () => {
    alert('Here is more information about beer...');
  };

  const handleAbout = () => {
    alert('About this page...');
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header>
        <nav className="navbar">
          <ul className="nav-list">
            <li><button onClick={handleHome}>Home</button></li>
            <li><button onClick={handleMoreInfo}>More Info</button></li>
            <li><button onClick={handleAbout}>About</button></li>
          </ul>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter beer name"
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </nav>
      </header>

      <div className="image-container">
        {beerImages.map((image, index) => (
          <img key={index} src={image} alt={`Beer ${index}`} className="beer-image" />
        ))}
      </div>
    </div>
  );
};



export default App;
