import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'loaders.css/loaders.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderEl = document.getElementById('loader');


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: true,
});

export function createGallery(images) {

  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b><span>${likes}</span></p>
              <p class="info-item"><b>Views</b><span>${views}</span></p>
              <p class="info-item"><b>Comments</b><span>${comments}</span></p>
              <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
            </div>
          </div>
        </a>
      </li>
    `;
    })
    .join('');


  galleryContainer.insertAdjacentHTML('beforeend', markup);


  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove('is-hidden');
  loaderEl.setAttribute('aria-hidden', 'false');
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add('is-hidden');
  loaderEl.setAttribute('aria-hidden', 'true');
}
