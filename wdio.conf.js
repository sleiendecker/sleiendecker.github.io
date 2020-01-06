const seleniumOpts     = require('./config/selenium');
const path             = require('path');


exports.config = {
  runner: 'local',
  specs: [
    './scrape/list.spec.js'
  ],
  // exclude: ['./specs/companion/login/resetPassword.spec.js'],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    // 'goog:chromeOptions': {
    //   // to run chrome headless the following flags are required
    //   // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
    //   args: ['--headless', '--disable-gpu'],
    // }
  }],

  sync: true,
  logLevel: 'error',
  // coloredLogs: true,
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  screenshotPath: './errorShots/',
  // with "/", then the base url gets prepended.
  baseUrl: 'http://localhost',
  waitforTimeout: 20000,
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: ['spec'],
  // reporterOptions: {
  //   showDiff: true,
  //   outputDir: `${appRoot}/testReports/companion`
  // },
  services: [
    'selenium-standalone'
  ],
  framework: 'mocha',

  seleniumInstallArgs: seleniumOpts,
  seleniumArgs: seleniumOpts,
  seleniumLogs: './seleniumLogs',
  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: 5000000
  },
  // plugins: {
  //   'wdio-screenshot': {}
  // },
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  beforeSession: function (config, capabilities, specs) {
    console.log('****Running specs:', specs);

  },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function (capabilities, specs) {

  },
  //
  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function () {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function () {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // beforeTest: function (test) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // afterTest: function (test) {
  // },
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. It is not
   * possible to defer the end of the process using a promise.
   * @param {Object} exitCode 0 - success, 1 - fail
   */
  // onComplete: function(exitCode) {
  // }
}