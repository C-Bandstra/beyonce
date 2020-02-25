// Variables
var cardContainer = document.querySelector('.card-container');
var gamePage = document.querySelector('.game-page');
var winPage = document.querySelector('.win-page-container');
var matchAmount = document.querySelector('.amount-container');
var winPageTime = document.querySelector('.total-time');
var firstScore = document.querySelector('.first-score');
var secondScore = document.querySelector('.second-score');
var thirdScore = document.querySelector('.third-score');
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
  displayTopTimes();
}

function displayCards(event) {
  var cardCounter = 0;
  for (var i = 0; i < deck.shuffledCards.length; i++) {
    cardCounter++;
    cardContainer.insertAdjacentHTML('beforeend', `
    <div id="${deck.shuffledCards[i].id}" class="card card-${deck.shuffledCards[i].id}">
      <p class="">B</p>
    </div>`);
  }
}
//card 1 div should always be in the same spot
//assign card image differently based on index order

function displayImg(event) {
  for (var i = 0; i < deck.shuffledCards.length; i++) {
    var cardId = deck.shuffledCards[i].id;
    var imgId = cardId > 5 ? cardId - 5 : cardId;
    var isSelected = deck.shuffledCards[i].selected;
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

function displayTopTimes() {
  var firstTime = timer.topTimes[0];
  var sec1 = Math.round(firstTime % 60);
  var min1 = Math.floor(firstTime / 60);
  var secondTime = timer.topTimes[1];
  var sec2 = Math.round(secondTime % 60);
  var min2 = Math.floor(secondTime / 60);
  var thirdTime = timer.topTimes[2];
  var sec3 = Math.round(thirdTime % 60);
  var min3 = Math.floor(thirdTime / 60);
  firstScore.innerText = `${min1 || '0'} min ${sec1 || '0'} sec`;
  secondScore.innerText = `${min2 || '0'} min ${sec2 || '0'} sec`;
  thirdScore.innerText = `${min3 || '0'} min ${sec3 || '0'} sec`;
}


function showCurrentMatchesImg(card) {
  var imgCtr = 1;
  var matchBoxes = gamePage.getElementsByClassName('current-match');
  for (var i = 0; i < matchBoxes.length; i++) {
    if (card.matchInfo === matchBoxes[i].dataset.id) {
      matchBoxes[i].classList.add(`img-${imgCtr}`)
    }
    imgCtr++;
  }
}