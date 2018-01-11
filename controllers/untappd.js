module.exports = class UntappdPage{

  constructor() {
    this.beerInfoList = [];
  }


  search(beerName) {
    var formattedQuery = beerName.split(' ').join('+')
    browser.url(`https://untappd.com/search?q=${formattedQuery}`);
  }

  searchList(beerList) {
    this.beerInfoList = [];
    for (var i = 0; i < beerList.length; i++) {
      this.search(beerList[i])
      this.getInfo(beerList[i]);
    }
  }

  getInfo(targetBeer) {
    console.log(targetBeer);
    var beerInfo = {}
    if (browser.isExisting('.results-none')) {
      beerInfo.NAME = targetBeer;
      beerInfo.BREWERY = null;
      beerInfo.RATING = 'Not found'
      beerInfo.URL = null;
    } else {
      beerInfo.NAME = browser.element('.beer-item .name').getText();
      beerInfo.BREWERY = browser.element('.beer-item .brewery').getText();
      beerInfo.RATING = browser.element('.beer-item .rating').getText().slice(1, -1);
      beerInfo.URL = browser.element('.beer-item .name a').getAttribute('href');
    }
    this.beerInfoList.push(beerInfo);
  }


}