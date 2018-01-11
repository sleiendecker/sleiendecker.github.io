const fs = require('fs'),
path     = require('path'),
_        = require('lodash'),
json2xls = require('json2xls'),
xlsx     = require('node-xlsx').default,
xlsxDir  = path.join(__dirname, '..', 'spreadsheets'),
jsonDir  = path.join(__dirname, '..', 'json');

module.exports = class Xlsx {

  constructor(targetFile) {
    this.targetFile = targetFile;
    this.parsedList = [];
  }

  parseTargetFile() {
    const xlsxFile = xlsx.parse(`${xlsxDir}/${this.targetFile}`);
    return xlsxFile[0].data;
  }

  buildList() {
    const beers = this.parseTargetFile()
    for (var i = 1; i < (beers.length); i++) {
      var beer = beers[i].slice(0, 3).join(' ');
      this.parsedList.push(beer);
    }
  }

  writeFile(beerData, destFile) {
    const xlsxFilePath = `${xlsxDir}/${destFile}.xlsx`,
      jsonFilePath = `${jsonDir}/${destFile}.js`,
      xls = json2xls(beerData);
    fs.writeFileSync(xlsxFilePath, xls, 'binary')
    console.log('Writing to json path:', jsonFilePath);
    let jsonData = `data = ${JSON.stringify(beerData, null, 2)}`
    fs.writeFileSync(jsonFilePath, jsonData, 'binary');
  }


}