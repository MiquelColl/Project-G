import ReviewService from './servicios/ReviewsServices.js';
import UsersServices from './servicios/UsersServices.js';
import NewsServices from './servicios/NewsServices.js';
import GameServices from './servicios/GamesServices.js';

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 1);
});


const adminUsers = document.querySelector('#admin-users')
const adminNews = document.querySelector('#admin-news')
const adminReviews = document.querySelector('#admin-reviews')
const adminGames = document.querySelector('#admin-game')
const registerBtn = document.querySelector('#btn-user-register')
const registerNewsBtn = document.querySelector('#btn-enter-news')
const registerGameBtn = document.querySelector('#btn-enter-game')
const registerReviewBtn = document.querySelector('#btn-enter-review')



const newUser = () => {
  const name = document.querySelector('#register-name').value
  const surnames = document.querySelector('#register-surnames').value
  const email = document.querySelector('#register-email').value
  const address = document.querySelector('#register-address').value
  const password = document.querySelector('#register-password').value
  const repeatPassword = document.querySelector('#register-repeat-password').value
  const params = {name, surnames, email, address, password}
  if(password === repeatPassword){
    UsersServices.insertUser(params)
    console.log(params);
    adminUsers.reset();
  } else {
    console.log("Contraseñas no coinciden");
  }
}

const newNew = () => {
  console.log("Hola2");
  const name = document.querySelector('#register-news-name').value
  const date = document.querySelector('#register-news-date').value
  const image = document.querySelector('#register-news-image').value
  const description = document.querySelector('#register-news-description').value
  const params = {name, date, image, description}
  NewsServices.insertNews(params)
  console.log(params);
  adminNews.reset()
}

const newReview = () => {
  console.log("Hola2");
  const name = document.querySelector('#register-review-name').value
  const image = document.querySelector('#register-review-image').value
  const description = document.querySelector('#register-review-description').value
  const params = {name, image, description}
  ReviewService.insertReview(params)
  console.log(params);
  adminReviews.reset()
}

const newGame = () => {
  console.log("Hola2");
  const name = document.querySelector('#register-game-name').value
  const price = document.querySelector('#register-game-price').value
  const image = document.querySelector('#register-game-image').value
  const description = document.querySelector('#register-game-description').value
  const params = {name, price, image, description}
  GameServices.insertGame(params)
  console.log(params);
  adminGames.reset()
}

function init() {
  console.log("Hola");
  registerBtn.addEventListener('click', ()=>{newUser()});

  
}

init()