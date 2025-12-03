const path = require('path');

exports.config = {
    // (file content copied from root wdio.android.conf.js)
    runner: 'local',
    port: 4723,
    specs: [
        '../../tests/forms/forms.test.js',
        '../../tests/home/home.test.js',
        '../../tests/login/login.test.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        'appium:platformName': 'Android',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'Pixel 6',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.resolve('./app/android/android.wdio.native.app.v1.0.8.apk') 
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [  
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723
            },
            logPath: './',
            timeout: 120
        }]
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
        }]
      ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
