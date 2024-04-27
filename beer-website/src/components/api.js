import axios from 'axios';

const PEXELS_API_KEY = 'Te2AxJtvuJZTZLxU21ZBZiZ0jEFAaZiQ0QzjK2YzqbF4Ui2XghQzwO7B'; // Pexels API key
const PEXELS_API_URL = 'https://api.pexels.com/v1/search';

// Function to fetch beer images based on search term
const fetchBeerImages = async (searchTerm) => {
  try {
    const response = await axios.get(`${PEXELS_API_URL}?query=${searchTerm}&per_page=5`, {
      headers: {
        Authorization: 'Te2AxJtvuJZTZLxU21ZBZiZ0jEFAaZiQ0QzjK2YzqbF4Ui2XghQzwO7B', //  Pexels API key in headers
      },
    });
    const images = response.data.photos.map((photo) => photo.src.medium); // Extract image URLs
    return images;
  } catch (error) {
    console.error('Error fetching beer images:', error);
    throw error;
  }
};

export { fetchBeerImages };
