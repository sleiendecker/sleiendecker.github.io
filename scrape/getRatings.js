const untappdPage = require('../controllers/untappd'),
  xlsx              = require('../controllers/xlsx'),
  scraper           = require('../controllers/scraper'),
  bars              = require('../config/bars');

const UntappdPage = new untappdPage(),
  Xlsx = new xlsx('beerCellar.xlsx');

var Scraper;

describe('Get beer ratings from spreadsheet', () => {

  it('parses and builds the list from the provided list', () => {
    Xlsx.buildList();
  });

  it('searches the beer list on untappd', () => {
    let lists = require('../beerList');
    UntappdPage.searchList(lists.all);
  });

  it('writes results to a new spreadsheet', () => {
    console.log('LIST:\n', UntappdPage.beerInfoList);
    Xlsx.writeFile(UntappdPage.beerInfoList, 'mbcpRatings');
  });
});

// describe('Get beer ratings from sites', () => {

//   Object.keys(bars).forEach((bar) => {

//     it('scrapes bar sites', () => {
//       Scraper = new scraper(bars[bar])
//       Scraper.grabList();
//     })

//     it('searches the beer list on untappd', () => {
//       UntappdPage.searchList(Scraper.beerList);
//     });

//     it('writes results to a new spreadsheet', () => {
//       Xlsx.writeFile(UntappdPage.beerInfoList, Scraper.barName);
//     });


//   })
// });