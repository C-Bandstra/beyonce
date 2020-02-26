class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
    this.shuffledCards = [];
  }


  shuffle() {
    var min = 0
    var max = 9
    for (let i = 0; i < 10; i++) {
      var randomNum = Math.floor(Math.random() * (max - min) + min)
      var card = this.cards.splice(randomNum, 1)
      this.shuffledCards.push.apply(this.shuffledCards, card)
      max--
    }
    console.log(this.shuffledCards)
  }

  moveToMatched() {
    var selectedArr = this.selectedCards;
    if (selectedArr[0].matchInfo === selectedArr[1].matchInfo) {
      selectedArr.forEach(card => {
        card.match();
        showCurrentMatchesImg(card);
      })
      this.matchedCards.push(selectedArr);
      removeMatchedDom();
    } else {
      // this.removeClassFromFalseMatch();
    }
  }

  populateDeck() {
    var firstCardsId = 0;
    var lastCardsId = 5;
    for (var i = 1; i < 6; i++) {
      firstCardsId++;
      lastCardsId++;
      var card1 = new Card(`card-${i}`, firstCardsId, i);
      var card2 = new Card(`card-${i}`, lastCardsId, i);
      this.cards.push(card1);
      this.cards.push(card2);
    }
    this.shuffle()
  }

  checkSelected(event) {
    var selectedArr = this.selectedCards;
    this.shuffledCards.forEach((card, i) => {
      var cardIndex = this.shuffledCards[i];
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

  // removeClassFromFalseMatch() {
  //   debugger
  //   var falseMatch = cardContainer.getElementsByClassName('flipped');
  //   for (var i = 0; i < 2; i++) {
  //     falseMatch[0].classList.remove('flipped');
  //   }
  // }
}
