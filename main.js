var cardContainer = document.querySelector('.card-container');
var deck = new Deck();

window.onload = invokeDeck();

function invokeDeck() {
  deck.populateDeck();
  displayCards();
}

function displayCards() {
  var cardCounter = 0;
  for (var i = 0; i < deck.cards.length; i++) {
    cardCounter++;
    cardContainer.insertAdjacentHTML('beforeend', `
    <div id="${cardCounter}" class="card card-${cardCounter}">
      <p>B</p>
    </div>`)
  }
  console.log(cardCounter);
}
