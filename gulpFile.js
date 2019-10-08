const gulp    = require('gulp');
  webdriver   = require('gulp-webdriver'),
  mocha       = require('gulp-mocha'),
  fs          = require('fs'),
  path        = require('path'),
  chai        = require('chai'),
  configDir   = path.join(__dirname, 'config'),
  specsDir    = path.join(__dirname, 'scrape'),
  apiSpecsDir = path.join(__dirname, 'api_specs'),
  wdioDir     = path.join(configDir, 'wdio'),
  child       = require('child-process-promise'),
  argv        = require('yargs').argv

const capabilitiesConf = `${configDir}/capabilities.conf.js`,
  wdConfig = {};

gulp.task('scrape', (done) => {

  // specsDir

  // wdConfig = argv.seq ?
  // If seq arg is passed, modify webdriverio specs and instance properties
  gulp.src(`${wdioDir}/companion.conf.js`)
    .pipe(webdriver(wdConfig))
    .on('end', (res) => {
      console.log('done');
      console.log('res:', res);
      done();
    })
    .on('error', err => console.error(`Companion gulp error: ${err}`));
  console.log('scraping');
  done();
});

