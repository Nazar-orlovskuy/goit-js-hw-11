import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const query = formData.get('search-text').trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight'
    });
    return;
  }


  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {

      const images = data.hits;

      if (!Array.isArray(images) || images.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
        return;
      }

      createGallery(images);

      iziToast.success({
        title: 'Success',
        message: `Found ${data.totalHits} images. Showing ${images.length}.`,
        position: 'topRight'
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong while fetching images.',
        position: 'topRight'
      });
    })
    .finally(() => {
      hideLoader();
    });
}
