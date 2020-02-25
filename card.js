class Card {
  constructor(matchInfo, id) {
    this.matchInfo = matchInfo;
    this.matched = false;
    this.selected = false;
    this.id = id;
    this.img = null;
  }

  match() {
    this.matched = true;
    //write functionality to compare similar id's
    //toggle this.matched once match is made
  }
}
