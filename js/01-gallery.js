import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = createGalleryPalette(galleryItems);
const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  showBigImage(event.target.dataset.source);
}

function showBigImage(bigImageUrl) {
  const instance = basicLightbox.create(
    `
    <img src="${bigImageUrl}" width="800" height="600">
    `,
    {
      onClose: () => window.removeEventListener('keydown', onEscape),
    },
  );
  instance.show();

  function onEscape(event) {
    instance.close();
  }

  window.addEventListener('keydown', onEscape);
}

function createGalleryPalette(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join('');
}
