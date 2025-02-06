console.log('merhaba');
// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

// Dokümantasyonda belirtilen import
import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '48479056-b624f953eac1ddf8407abd187';
const BASE_URL = 'https://pixabay.com/api/';

// DOM öğelerimi seçtim

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');
const imagesContainer = document.querySelector('.images-container');
const loader = document.querySelector('.loader');

//Butona tıklama olayı

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim(); // input değerini aldım.
  if (query) {
    fetchImages(query); // resimleri getir
  } else {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
  }
});

// Pixabay API'ye Fetch ile istek attım

function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  loader.style.visibility = 'visible'; // Loader'ı göster
  imagesContainer.innerHTML = ''; // Önceki içeriği temizle

  setTimeout(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('API isteği başarısız oldu');
        }
        return response.json();
      })
      .then(data => {
        if (data.hits.length > 0) {
          displayImages(data.hits);
        } else {
          iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        }
      })
      .catch(error => {
        console.log('Hata : ', error);
        imagesContainer.innerHTML =
          '<p>Bir hata oluştu lütfen tekrar deneyin </p>';
      })
      .finally(() => {
        loader.style.visibility = 'hidden'; // Loader'ı gizle
      });
  }, 500);
}

// Resimleri ekrana bastım
function displayImages(images) {
  imagesContainer.innerHTML = images

    .map(
      image => `
        <div class="image-card">
       <a href="${image.largeImageURL}"> <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}"></a>
         <div class="info">
             <p><strong>Likes:</strong><br> ${image.likes}</br></p>
                    <p><strong>Views:</strong> <br>${image.views}</br></p>
                    <p><strong>Comments:</strong> <br>${image.comments}</br></p>
                    <p><strong>Downloads:</strong><br> ${image.downloads}</br></p>
                </div>
            </div>

        `
    )

    .join('');

  const lightbox = new SimpleLightbox('.image-card a', {
    captionsData: 'alt', // Alt metnini göster
    captionDelay: 250, // Alt metnin görünme gecikmesi (ms)
    nav: true, //sağa/sola kaydırma
  });
  lightbox.refresh();
}
