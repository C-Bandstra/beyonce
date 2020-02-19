var cardContainer = document.querySelector('.card-container');
var deck = new Deck();

window.onload = invokeDeck();


// function displayCards() {
//   for ( var i = 0 ; i < this. ; i++ ) {
//
//   }
// }

function invokeDeck() {
  deck.populateDeck();
}
