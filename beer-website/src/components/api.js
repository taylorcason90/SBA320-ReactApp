// api.js
import axios from 'axios';

// Define the base URL for the Pexels API
const API_URL = 'https://api.pexels.com/v1/';

// Define a function to fetch beer images based on the search term
const fetchBeerImages = async (searchTerm) => {
  try {
    // Set up the headers with the required authentication token
    const headers = {
      Authorization: 'Te2AxJtvuJZTZLxU21ZBZiZ0jEFAaZiQ0QzjK2YzqbF4Ui2XghQzwO7B', // Replace 'Your-Pexels-API-Key' with your actual API key
    };

    // Make a GET request to the search endpoint of the Pexels API
    const response = await axios.get(`${API_URL}search?query=${searchTerm}&per_page=5`, {
      headers: headers,
    });

    // Extract the image URLs from the response data
    const images = response.data.photos.map((photo) => photo.src.large);

    return images;
  } catch (error) {
    console.error('Error fetching beer images:', error);
    throw error;
  }
};

export { fetchBeerImages };
