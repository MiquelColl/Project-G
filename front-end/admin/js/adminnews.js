import NewsServices from './servicios/NewsServices.js';


window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 1);
});



const adminNews = document.querySelector('#admin-news')
const registerNewsBtn = document.querySelector('#btn-enter-news')


const newNew = () => {
  console.log("Hola2");
  const newsTitle = document.querySelector('#register-news-name').value
  const newsDate = document.querySelector('#register-news-date').value
  const newsImage = document.querySelector('#register-news-image').value
  const newsDescription = document.querySelector('#register-news-description').value
  const params = {newsTitle, newsDate, newsImage, newsDescription}
  NewsServices.insertNews(params)
  console.log(params);
  adminNews.reset()
}


function init() {
  console.log("Hola");
  registerNewsBtn.addEventListener('click', ()=>{newNew()});

}

init()