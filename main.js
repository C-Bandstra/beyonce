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
    displayCards(event);
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
    deck.cards[i].matchInfo = `${cardCounter}`;
    // checkSelected(cardCounter, event);
    cardContainer.insertAdjacentHTML('beforeend', `
    <div id="${cardCounter}" class="card card-${cardCounter}">
      <p>B</p>
    </div>`) 
    checkSelected(cardCounter, event)
  }
}

function checkSelected(cardCounter, event) {
  debugger
  for(var i = 0; i < deck.cards.length; i++) {
    if(deck.cards[i].selected === true) {
      event.target.classList.add(`img-${cardCounter}`)
      break
    }
  }
}