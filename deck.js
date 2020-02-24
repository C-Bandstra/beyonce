class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {
    //when the user starts a new game, the cards should be shuffled
  }

  moveToMatched(card) {
    var selectedArr = this.selectedCards;
    if (selectedArr[0].matchInfo === selectedArr[1].matchInfo) {
      selectedArr.forEach(card => {
        card.matched = true
      })
      this.matchedCards.push(selectedArr);
      removeMatchedDom();
    } else {
      this.removeClassFromFalseMatch();
    }
  }

  populateDeck() {
    var firstCardsId = 0;
    var lastCardsId = 5;
    for (var i = 1; i < 6; i++) {
      firstCardsId++;
      lastCardsId++;
      var card1 = new Card(`card-${i}`, firstCardsId);
      var card2 = new Card(`card-${i}`, lastCardsId);
      this.cards.push(card1);
      this.cards.push(card2);
    }
  }

  checkSelected(event) {
    var selectedArr = this.selectedCards;
    this.cards.forEach((card, i) => {
      var cardIndex = this.cards[i];
      if (cardIndex.id == event.target.id && selectedArr.length <= 2) {
        this.populateSelected(selectedArr, cardIndex);
      }
    })
  }

  populateSelected(selectedArr, cardIndex) {
    if (!cardIndex.selected && selectedArr.length < 2) {
      selectedArr.push(cardIndex);
      cardIndex.selected = true;
    } else {
      this.removeSelected(selectedArr);
    }
  }

  removeSelected(selectedArr) {
    selectedArr.forEach(card => {
      if (card.selected && (card.id == event.target.id)) {
        var index = selectedArr.indexOf(card);
        card.selected = false;
        selectedArr.splice(index, 1);
      }
    })
  }

  removeClassFromFalseMatch() {
    var falseMatch = cardContainer.getElementsByClassName('img');
    for (var i = 0; i < 2; i++) {
      falseMatch[0].classList.remove('img');
    }
  }
}
