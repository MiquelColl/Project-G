import GameService from '../../admin/js/servicios/GamesServices.js';

const shopGrid = document.querySelector('.shop')




window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 1);
});

const populateGames = (array) => {
  shopGrid.innerHTML = '';
  array.forEach(e => {
    shopGrid.innerHTML += `
    <div class="shop-container">
      <div class="wrapper">
          <div class="banner-image" style="background-image: url('./img/games/${e.gameImage}') " >  </div>
          <img class="gameImage" src="./img/games/${e.gameImage}">
          <h1 class="gameTitle">${e.gameTitle}</h1>
          <p class="gamePrice">${e.gamePrice}€</p>
      </div>
      <div class="button-wrapper">
          <button class="btn outline">DETAILS</button>
          <button class="addToCart btn fill" type="button">BUY NOW</button>
      </div>
    </div>
      `;
  });

  shoppingCart()
}

let localStorageContainer = []

const shoppingCart = () => {
  const addToShoppingCartButtons = document.querySelectorAll('.addToCart')
  addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)

    const buyButton = document.querySelector('.comprarButton')
    buyButton.addEventListener('click', comprarButtonClicked)
    const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

    function addToCartClicked(event) {
      const button = event.target
      const shopContainer = button.closest('.shop-container')

      const gameTitle = shopContainer.querySelector('.gameTitle').textContent
      const gamePrice = shopContainer.querySelector('.gamePrice').textContent
      const gameImage = shopContainer.querySelector('.gameImage').src

      addGameToShoppingCart(gameTitle, gamePrice, gameImage)
    }

    function addGameToShoppingCart(gameTitle, gamePrice, gameImage) {

      const elementTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle')
      
      for (let i = 0; i < elementTitle.length; i++) {
        if (elementTitle[i].innerText === gameTitle) {
          let elementQuantity = elementTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
          elementQuantity.value++
          updateShoppingCartTotal()
          return
        }
      }

      const shoppingCartRow = document.createElement('div')
      const shoppingCartContent = `
      <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${gameImage} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${gameTitle}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${gamePrice}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>
  `
      shoppingCartRow.innerHTML = shoppingCartContent
      shoppingCartItemsContainer.append(shoppingCartRow)
     

      shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)

      shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanger)

      updateShoppingCartTotal()



    }




    function updateShoppingCartTotal() {
      let total = 0
      const shoppingCartTotal = document.querySelector('.shoppingCartTotal')

      const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')

      shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('€', ''))

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity
      })

      shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`
    }

    function removeShoppingCartItem(event) {
      const buttonClicked = event.target
      buttonClicked.closest('.shoppingCartItem').remove()
      updateShoppingCartTotal()
    }

    function quantityChanger(event) {
      const input = event.target
      if (input.value <= 0) {
        input.value = 1
      }
      updateShoppingCartTotal()
    }

    function comprarButtonClicked() {
      shoppingCartItemsContainer.innerHTML = ''
      updateShoppingCartTotal()
    }


  });

}




const renderGames = () => {
  GameService.getGamesList().then(data => {
    populateGames(data)
  })

}

function init() {
  renderGames();
  console.log("🚀 ~ file: shop.js:102 ~ shoppingCart ~ localStorage:", localStorage)

}

init()


