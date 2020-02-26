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
  }
}
