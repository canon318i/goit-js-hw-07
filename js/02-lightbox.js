import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = createGalleryPalette(galleryItems);
const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function createGalleryPalette(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" /></a>
        `;
    })
    .join('');
}
