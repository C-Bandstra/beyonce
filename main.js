// Variables
var cardContainer = document.querySelector('.card-container');
var gamePage = document.querySelector('.game-page');
var winPage = document.querySelector('.win-page-container');
var matchAmount = document.querySelector('.amount-container');
var winPageTime = document.querySelector('.total-time');
var deck = new Deck();
var timer = new Timer();

window.onload = invokeDeck();

// Event Listeners
cardContainer.addEventListener('click', clickHandler);

// Functions
function clickHandler(event) {
  if (event.target.closest('.card')) {
    deck.checkSelected(event);
    displayImg(event);
    invokeTimer();
  }
  if (deck.selectedCards.length === 2) {
    deck.moveToMatched();
  }
}

function invokeTimer() {
  if (!timer.started) {
    timer.start();
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
  falseMatch[0].remove();
  falseMatch[0].remove();
  deck.matchedCards.forEach((match) => {
    match.forEach(card => {
      card.selected = false;
      deck.selectedCards = [];
    })
  })
}

function increaseMatchAmount() {
  var amount = Number(matchAmount.innerText)
  amount++;
  matchAmount.innerText = `${amount}`;
  if (matchAmount.innerText == 5) {
    timer.stop();
  }
}

function gameOver(minutes, seconds) {
  gamePage.classList.add('hide');
  winPage.classList.remove('hide');
  winPageTime.innerText = `${minutes} minutes ${seconds} seconds`;
}
