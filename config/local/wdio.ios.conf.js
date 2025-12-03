const path = require('path');

exports.config = {
    // (file content copied from root wdio.ios.conf.js)
    runner: 'local',
    port: 4723,
    specs: [
        '../../tests/forms/forms.test.js',
        '../../tests/home/home.test.js',
        '../../tests/login/login.test.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        'appium:platformName': 'iOS',
        'appium:platformVersion': '18.4',
        'appium:deviceName': 'iPhone 11',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), "./app/ios/wdiodemoapp.app"),
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
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
    waitforTimeout: 18000,
    connectionRetryTimeout: 90000,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
