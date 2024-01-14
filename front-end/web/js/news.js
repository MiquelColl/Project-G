import GameService from '../../admin/js/servicios/GamesServices.js';

const shopGrid = document.querySelector('.shop')

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 1);
  });

  const populateGames = (array) => {
    shopGrid.innerHTML = '';
    array.forEach(e => {
      shopGrid.innerHTML += `
      <div class="shop-container">
      <div class="wrapper">
          <div class="banner-image" style="background-image: url('./img/games/${e.gameImage}') " > </div>
          <h1>${e.gameTitle}</h1>
          <p>${e.gamePrice}€</p>
      </div>
      <div class="button-wrapper">
          <button class="btn outline">DETAILS</button>
          <button class="addToCart btn fill">BUY NOW</button>
      </div>
  </div>
      `;
    });
  }

  const renderGames = () => {
    GameService.getGamesList().then(data => {
      populateGames(data)
    })
  }

  function init() {
    renderGames();
    
  }
  
  init()