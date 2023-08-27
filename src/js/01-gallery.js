// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulEl = document.querySelector('.gallery');

const createListOfPictures = arr =>
  arr
    .map(
      item => `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img class='gallery__image' src='${item.preview}' alt='${item.description}' data-source="${item.original}"/>
      </a>
 </li>`
    )
    .join("");

const handleList = event => {
    event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
};

ulEl.insertAdjacentHTML('afterbegin', createListOfPictures(galleryItems));
ulEl.addEventListener('click', handleList);

const lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 250,
  captionPosition: 'bottom',
  captionsData: `alt`,
});
