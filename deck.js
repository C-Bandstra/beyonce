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
    var firstCardsId = 0
    var lastCardsId = 5
    for (var i = 1; i < 6; i++) {
      firstCardsId++
      var card = new Card(`card-${i}`, firstCardsId);
      this.cards.push(card);
    }
    for (var i = 1; i < 6; i++) {
      lastCardsId++
      var card = new Card(`card-${i}`, lastCardsId);
      this.cards.push(card);
    }
    console.log(this.cards);
  }

  populateSelected(event) {
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i].id == event.target.id && this.selectedCards.length <= 2) {
        if (!deck.cards[i].selected) {
          this.selectedCards.push(this.cards[i])
          this.cards[i].selected = true;
          console.log(this.selectedCards);
          break
        } else {
          this.removeSelected()
        }
      }
    }
  }

  removeSelected() {
    for (var i = 0; i < this.selectedCards.length; i++) {
      if(this.selectedCards[i].selected && (this.selectedCards[i].id == event.target.id)) {
        var index = this.selectedCards.indexOf(this.selectedCards[i])
        this.selectedCards[i].selected = false;
        this.selectedCards.splice(index, 1)
        console.log(this.selectedCards);
      }
    }
  }
}
