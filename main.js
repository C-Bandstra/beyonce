// Variables
var cardContainer = document.querySelector('.card-container');
var deck = new Deck();

window.onload = invokeDeck();

// Event Listeners
cardContainer.addEventListener('click', clickHandler)

// Functions

function clickHandler(event) {
  if(event.target.closest('.card')) {
    deck.populateSelected(event);
    checkSelected(event);
  }
}

function invokeDeck() {
  deck.populateDeck();
  displayCards(event);
}

function displayCards(event) {
  var cardCounter = 0;
  for (var i = 0; i < deck.cards.length; i++) {
    cardCounter++;
    cardContainer.insertAdjacentHTML('beforeend', `
    <div id="${cardCounter}" class="card card-${cardCounter}">
      <p class="">B</p>
    </div>`)
  }
}

function checkSelected(event) {
  for(var i = 0; i < deck.cards.length; i++) {
    var cardId = deck.cards[i].id;
    var imgId = cardId > 5 ? cardId - 5 : cardId;
    var isSelected = deck.cards[i].selected;
    var clickedId = event.target.id;
    if(isSelected && clickedId == cardId) {
      event.target.classList.toggle(`img-${imgId}`);
      event.target.firstElementChild.classList.toggle('hide')
      break
    }
  }
}
