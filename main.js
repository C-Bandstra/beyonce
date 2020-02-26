var body = document.querySelector('body');
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
body.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target.closest('.card')) {
    deck.checkSelected(event);
    invokeTimer();
  }
  if (deck.selectedCards.length === 2) {
    deck.moveToMatched();
  }
  if (event.target.classList.contains('new-game-button')) {
    window.location.reload();
  }
  if(deck.selectedCards.length > 2) {
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

function displayCards() {
  for (var i = 0; i < deck.shuffledCards.length; i++) {
    var cardId = deck.shuffledCards[i].id;
    var imgId = cardId > 5 ? cardId - 5 : cardId;
    cardContainer.insertAdjacentHTML('beforeend', `
    <div id="${cardId}" class="front card card-${cardId}">
      <p class="">B</p>
    </div>
    <div id="${cardId}" class="back-${imgId} card card-${cardId} hide">
    </div>`);
  }
}

function displayImg(event) {
  if(event.target.classList.contains('front')) {
    event.target.classList.add('hide', 'flipped');
    event.target.nextElementSibling.classList.remove('hide');
  } else {
    event.target.classList.add('hide');
    event.target.previousElementSibling.classList.remove('hide', 'flipped');
  }
}

function removeMatchedDom() {
  var falseMatch = cardContainer.getElementsByClassName('flipped');
  falseMatch[0].nextElementSibling.style.visibility = 'hidden';
  falseMatch[1].nextElementSibling.style.visibility = 'hidden';
  falseMatch[0].classList.remove('flipped');
  falseMatch[0].classList.remove('flipped');
  deck.matchedCards.forEach((match) => {
    match.forEach(card => {
      card.selected = false;
      deck.selectedCards = [];
    });
  });
  increaseMatchAmount();
  showCurrentMatchesImg();
}

function increaseMatchAmount() {
  var amount = Number(matchAmount.innerText);
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
  var times = [];
  timer.topTimes.forEach(time => {
    var min = Math.floor(time / 60);
    var sec = Math.round(time % 60);
    times.push(min, sec)
  })
  firstScore.innerText = `${times[0] || '0'} min ${times[1] || '0'} sec`;
  secondScore.innerText = `${times[2] || '0'} min ${times[3] || '0'} sec`;
  thirdScore.innerText = `${times[4] || '0'} min ${times[5] || '0'} sec`;
}

function showCurrentMatchesImg(card) {
  var matchBoxes = gamePage.getElementsByClassName('current-match');
  for (var i = 0; i < matchBoxes.length; i++) {
    if (card.matchInfo === matchBoxes[i].dataset.id) {
      matchBoxes[i].classList.add(`back-${card.imgId}`);
    }
  }
}
