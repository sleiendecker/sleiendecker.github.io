module.exports = class Scraper {

  constructor(barObject) {
    this.bar = barObject;
    this.beerList = [];
    this.barName = barObject.name
  }

  grabList() {
    this.beerList;
    browser.url(this.bar.url);
    this.beerList = browser.getText(this.bar.css);
  }


}