var cardContainer = document.querySelector('.card-container');
var deck = new Deck();

window.onload = invokeDeck();

function invokeDeck() {
  deck.populateDeck();
  displayCards();
}

function displayCards() {
  debugger
  for (var i = 0; i < deck.cards.length; i++) {
    cardContainer.insertAdjacentHTML('beforeend', `
    <div class="card">
      <p>B</p>
    </div>`)
  }
}
