// Variables
var allCards = document
var cardContainer = document.querySelector('.card-container');
var matchAmount = document.querySelector('.amount-container')
var deck = new Deck();

window.onload = invokeDeck();

// Event Listeners
cardContainer.addEventListener('click', clickHandler);

// Functions

function clickHandler(event) {
  if (event.target.closest('.card')) {
    deck.checkSelected(event);
    displayImg(event);
  }
  if(deck.selectedCards.length === 2) {
    deck.moveToMatched();
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
    </div>`);
  }
}

function displayImg(event) {
  for (var i = 0; i < deck.cards.length; i++) {
    var cardId = deck.cards[i].id;
    var imgId = cardId > 5 ? cardId - 5 : cardId;
    var isSelected = deck.cards[i].selected;
    var clickedId = event.target.id;
    if (isSelected && clickedId == cardId) {
      event.target.classList.add(`img-${imgId}`, 'img');
      event.target.firstElementChild.classList.add('hide');
      break;
    } else {
      event.target.classList.remove(`img-${imgId}`);
      event.target.firstElementChild.classList.remove('hide');
    }
  }
}

function removeMatchedDom() {
  increaseMatchAmount();
  var falseMatch = cardContainer.getElementsByClassName('img');
  for(var i = 0; i < 2; i++) {
    falseMatch[0].remove();
  }
  deck.matchedCards.forEach((match, i) => {
    match.forEach(card => {
      card.selected = false;
      deck.selectedCards = [];
      console.log(falseMatch);
    })
  })
}

function increaseMatchAmount() {
  var amount = Number(matchAmount.innerText)
  amount++
  matchAmount.innerText = `${amount}`
}
