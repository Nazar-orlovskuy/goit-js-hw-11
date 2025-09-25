// src/js/pixabay-api.js
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52456910-518eb224c41e0afc98afec318';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}
