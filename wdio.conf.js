const seleniumOpts     = require('./config/selenium'),
    path               = require('path'),
    nodeModulesDir     = path.join(__dirname, 'node_modules'),
    phantomPath        = `${nodeModulesDir}/phantomjs-prebuilt/bin/phantomjs`,
    chai               = require('chai')

chromePath = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome';

exports.config = {

  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
      './scrape/*.js'
  ],
  maxInstances: 10,
  //
  capabilities: [{
    maxInstances: 5,
      //
    //   browserName: 'phantomjs',
    //   'phantomjs.binary.path': phantomPath,
    browserName: 'chrome',
    chromeOptions: {
    args: [
        '--headless',
        '--disable-gpu',
        '--window-size=1280,800'
    ],
    binary: chromePath
    }
  }],
    services: [
        'selenium-standalone'
    ],
    seleniumInstallArgs: seleniumOpts,
    seleniumArgs: seleniumOpts,
    seleniumLogs: './seleniumLogs',
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  waitforTimeout: 5000000,
  connectionRetryTimeout: 5000000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 5000000
  },
  beforeSuite: (suite) => {
  },
  before: () => {
    browser.windowHandleMaximize();
    browser.timeouts('implicit', 100);
  }
}
