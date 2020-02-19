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
  }
}

function invokeDeck() {
  deck.populateDeck();
  displayCards();
}

function displayCards() {
  var cardCounter = 0;
  for (var i = 0; i < deck.cards.length; i++) {
    cardCounter++;
    deck.cards[i].matchInfo = `${cardCounter}`;
    cardContainer.insertAdjacentHTML('beforeend', `
    <div id="${cardCounter}" class="card card-${cardCounter}">
      <p>B</p>
    </div>`)
    
  }
}




