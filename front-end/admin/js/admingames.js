import GameServices from './servicios/GamesServices.js';

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 1);
});

const adminGames = document.querySelector('#admin-game')
const registerGameBtn = document.querySelector('#btn-enter-game')
const listContainer = document.querySelector('#list-container')
const messageAlert = document.querySelector('#message');
const inputSearch = document.querySelector('#input-search');



const newGame = () => {
  console.log("Hola2");
  const gameTitle = document.querySelector('#register-game-name').value
  const gamePrice = document.querySelector('#register-game-price').value
  const gameImage = document.querySelector('#register-game-image').value
  const gameDeveloper = document.querySelector('#register-game-developer').value
  const gamePegi = document.querySelector('#register-game-pegi').value
  const gameCategory = document.querySelector('#register-game-category').value
  const gameDescription = document.querySelector('#register-game-description').value
  const params = {gameTitle, gamePrice, gameImage, gameDescription, gameDeveloper, gamePegi, gameCategory}
  GameServices.insertGame(params)
  console.log(params);
  adminGames.reset()
}


const populateGames = (items) => {
  listContainer.innerHTML=''
  items.forEach((e, i) => {
      
      listContainer.innerHTML += `
          <tr>
              <td>${i + 1}</td>
              <td>${e.gameTitle}</td>
              <td>${e.gameDeveloper}</td>
              <td>+${e.gamePegi}</td>
              <td>${e.gamePrice}€</td>
              <td>${e.gameImage}</td>
              <td>${e.gameCategory}</td>
              <td class="text-center">
                  <button id="btn-delete-${e.gameTitle}" class="btn btn-danger btn-delete">Delete</button>
                  <button id="btn-edit-${e.gameTitle}" class="btn btn-info btn-edit" >Edit</button>
              </td>
          </tr>
      `;
  });

  const buttonsDelete = document.querySelectorAll('.btn-delete');
    buttonsDelete.forEach(button => {
        button.addEventListener("click", function () {
            let id = this.id.split("-")[2];
            deleteGame(id);
        })
    });

    const buttonsEdit = document.querySelectorAll('.btn-edit');
    buttonsEdit.forEach(button => {
        button.addEventListener("click", function () {
            let id = this.id.split("-")[2];
            editGame(id);
        })
    });

}

let currentGame = null
const editGame = (id) => {
    console.log('id',id);
  GameServices.searchItemByName(id).then(data => {
    console.log('data',data);
      currentGame = data;
      console.log(gameTitle);
    document.querySelector('#register-game-name').value = data.gameTitle
    document.querySelector('#register-game-price').value = data.gamePrice
    document.querySelector('#register-game-image').value = data.gameImage
    document.querySelector('#register-game-developer').value = data.gameDeveloper
    document.querySelector('#register-game-pegi').value = data.gamePegi
    document.querySelector('#register-game-category').value = data.gameCategory
    document.querySelector('#register-game-description').value = data.gameDescription
    //   document.querySelector('#field-cover').value = data.cover;
     
  });
//   btnInsert.classList.replace("d-inline", "d-none");
//   btnUpdate.classList.replace("d-none", "d-inline");
//   btnCancel.classList.replace("d-none", "d-inline");
//   scrollToHash("title-form");
}

const searchGame = (event) => {
  event.preventDefault();
  const input = event.target;
  if (input.value.length >= 3) {
      let nameSearch = input.value;
      renderGames(nameSearch);
  } else if (input.value.length == 0) {
      renderGames();
  }
}

const deleteGame = (id) => {
  console.log(id);
  GameServices.delete(id)
      .then(data => {
          messageAlert.textContent = data.message;
          //Change state
          renderGames();
      })
}

const renderGames = (searchValue) => {
  listContainer.innerHTML = "";
  if (searchValue) {
      GameServices.searchItemByName(searchValue)
          .then(items => {

              populateGames(items);
          })
  } else {
      GameServices.getGamesList()
          .then(items => {
              populateGames(items);
          })
  }
}


function init() {
  console.log("Hola");
  renderGames()
  inputSearch.addEventListener('keyup', searchGame);
  registerGameBtn.addEventListener('click', ()=>{newGame()});

}

init()