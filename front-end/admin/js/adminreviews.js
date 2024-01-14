import ReviewService from './servicios/ReviewsServices.js';


window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 1);
});


const adminReviews = document.querySelector('#admin-reviews')
const registerReviewBtn = document.querySelector('#btn-enter-review')


const newReview = () => {
  console.log("Hola2");
  const reviewTitle = document.querySelector('#register-review-name').value
  const reviewImage = document.querySelector('#register-review-image').value
  const reviewDescription = document.querySelector('#register-review-description').value
  const params = {reviewTitle, reviewImage, reviewDescription}
  ReviewService.insertReview(params)
  console.log(params);
  adminReviews.reset()
}


function init() {
  console.log("Hola");
  registerReviewBtn.addEventListener('click', ()=>{newReview()});
  
}

init()