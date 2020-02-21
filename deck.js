class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {
    //when the user starts a new game, the cards should be shuffled
  }

  checkSelected(card) {
    //when a card is clicked, it should be moved to the selectedCards array
    //if a card is clicked a second time, there should still only be one of that
    //card in the selectedCards array
  }

  moveToMatched(card) {
    //if 2 cards are matched, move that pair to the matchedCards array
  }
  populateDeck() {
    var firstCardsId = 0;
    var lastCardsId = 5;
    for (var i = 1; i < 6; i++) {
      firstCardsId++;
      var card = new Card(`card-${i}`, firstCardsId);
      this.cards.push(card);
    }
    for (var i = 1; i < 6; i++) {
      lastCardsId++;
      var card = new Card(`card-${i}`, lastCardsId);
      this.cards.push(card);
    }
    console.log(this.cards);
  }

  populateSelected(event) {
    var selectedArr = this.selectedCards;
    for (var i = 0; i < this.cards.length; i++) {
      var cardIndex = this.cards[i];
      if (cardIndex.id == event.target.id && selectedArr.length <= 2) {
        if (!cardIndex.selected && selectedArr.length < 2) {
          selectedArr.push(cardIndex);
          cardIndex.selected = true;
          console.log(selectedArr);
          break;
        } else {
          this.removeSelected(selectedArr);
        }
      }
    }
  }

  removeSelected(selectedArr) {
    for (var i = 0; i < selectedArr.length; i++) {
      if (selectedArr[i].selected && (selectedArr[i].id == event.target.id)) {
        var index = selectedArr.indexOf(selectedArr[i]);
        selectedArr[i].selected = false;
        selectedArr.splice(index, 1);
        console.log(selectedArr);
      }
    }
  }
}
