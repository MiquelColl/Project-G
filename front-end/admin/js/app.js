import ReviewService from './servicios/ReviewsServices.js';

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 1);
});

const reviewContainer = document.querySelector('#reviewContainer');
const uploadButtn = document.querySelector('#upload')
const formulario = document.querySelector('#formulario')


const populateReviews = (array) => {
  reviewContainer.innerHTML = '';
  array.forEach(e => {
    reviewContainer.innerHTML += `
    <div class="card">
      <h1 class="card-title">
       ${e.title}
      </h1>
      <p class="card-text">
        ${e.description}
      </p>
  </div>
    `;
  });
}

const renderReview = () => {
  ReviewService.getReviewsList().then(data => {
    populateReviews(data)
  })
}

const newReview = () => {
  const title = document.querySelector('#title').value
  const description = document.querySelector('#desc').value
  const params = {title, description}
  ReviewService.insertReview(params)
  console.log(params);
  renderReview()
  formulario.reset()
}

function init() {
  renderReview();
  uploadButtn.addEventListener('click', ()=>{newReview()});
}

init()