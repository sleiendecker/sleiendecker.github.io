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
  // if (argv.seq) {
  //   wdConfig.specs = sequentialSpecs;
  //   wdConfig.maxInstancesPerCapability = 1,
  //   wdConfig.maxInstances = 1,
  //   wdConfig.maxSessions = 1
  // } else {
  //   // exclude sequential specs when running in parallel
  //   wdConfig.exclude = sequentialSpecs
  // }
  // gulp.src(`${wdioDir}/companion.conf.js`)
  //   .pipe(webdriver(wdConfig))
  //   .on('end', (res) => {
  //     console.log('done');
  //     console.log('res:', res);
  //     done();
  //   })
    // .on('error', err => console.error(`Companion gulp error: ${err}`));
  console.log('scraping');
  done();
});

gulp.task('setDevices', ['rmConfig'], (done) => {
  let { getAllDevices } = require('./support/utils'),
  deviceCapabilities  = require('./config/deviceCapabilities');
  getAllDevices(deviceCapabilities)
    .then((devices) => {
      fs.writeFileSync(
        capabilitiesConf,
        `module.exports = ${JSON.stringify(devices, null, 2)}`,
        'utf-8'
      );
      done();
    })
  .catch((err) => console.error('onPrepare err:', err));
});

gulp.task('rmConfig', (done) => {
  fs.stat(capabilitiesConf, (statErr, stat) => {
    if (!statErr) {
      child.exec(`rm ${capabilitiesConf}`, (execErr, stdout, stderr) => {
        let status = execErr ? execErr : `Successfully removed ${capabilitiesConf}`;
        console.log(status);
      });
    } else {
      console.log(`${capabilitiesConf} does not exist`);
    }
    done();
  });  
});


gulp.task('clean', function(done) {
  let errorShots = path.join(__dirname, 'errorShots', '**'),
    testResults = path.join(__dirname, 'testReports', '**', '*');
  
  [ errorShots, testResults ].forEach(dir => {
    child.exec(`ls ${dir}`)
      .then(res => {
        if (res.stdout) {
          console.log('Removing contents from', dir);
          return child.exec(`rm -rf ${dir}`);
        }
      });
  });
  done();
});

gulp.task('api', () => {
  let specsPath = `${apiSpecsDir}/*.spec.js`,
    mochaOpts = {
      reporter: 'spec',
      timeout: 10000
    };

  return gulp.src(specsPath, { read: false })
    .pipe(mocha(mochaOpts));
});