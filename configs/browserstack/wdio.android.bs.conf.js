export const config = {

    user: 'marlon_rl4NjQ',
    key: 'hSxsGsznUEWoQCWTWi11',

    specs: [
        '../tests/forms/forms.test.js',
        '../tests/home/home.test.js',
        '../tests/login/login.test.js'
    ],

    // Patterns to exclude.

    exclude: [
    
    ],

    // ============
    // Capabilities
    // ============

    maxInstances: 1,
    capabilities: [{
        'appium:platformName': 'Android',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'Pixel 6',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'bs://dd4f469a55a8b66164435382219475e9988c4437'
    }],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'error',

    // Default timeout for all waitFor* commands.

    waitforTimeout: 18000,
    
    // Default request retries count
    
    connectionRetryCount: 3,
    
    services: ['browserstack'],

    type: "module",

    framework: 'mocha', 
        mochaOpts: {
            require: ['@babel/register'],
            timeout: 60000
    },
    reporters: ['spec', ['allure', {
        outputDir: 'report-android-browserstack',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }]],
}