import ReviewsService from '../../admin/js/servicios/ReviewsServices.js';

const reviewGrid = document.querySelector('.reviews')

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 1);
  });

  const populateReviews = (array) => {
    reviewGrid.innerHTML = '';
    array.forEach(e => {
      reviewGrid.innerHTML += `
      <article class="cards">
            <div class="article-wrapper">
              <figure class="image-container">
                <img src="./img/revi/${e.reviewImage}" alt="" />
              </figure>
              <div class="article-body">
                <h2>${e.reviewTitle}</h2>
                <p>
                  ${e.reviewDescription}
                </p>
                <a href="#" class="read-more">
                  Read more <span class="sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
      `;
    });
  }

  const renderReviews = () => {
    ReviewsService.getReviewsList().then(data => {
      populateReviews(data)
    })
  }

  function init() {
    renderReviews();
    
  }
  
  init()