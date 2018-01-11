const selenium = require('selenium-standalone');

module.exports = {

  opts: {
    version: '3.0.1',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        version: '2.25',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      }
    },
    logger: (message) => {
      console.log(message);
    },
    progressCb: (totalLength, progressLength, chunkLength) => {
      process.stdout.write(`Downloading ${progressLength}/${totalLength}\r`);
    }
  }
}