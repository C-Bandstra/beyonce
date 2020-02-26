class Card {
  constructor(matchInfo, id, imgId) {
    this.matchInfo = matchInfo;
    this.matched = false;
    this.selected = false;
    this.id = id;
    this.imgId = imgId;
  }

  match() {
    this.matched = true;
    //write functionality to compare similar id's
    //toggle this.matched once match is made
  }
}
