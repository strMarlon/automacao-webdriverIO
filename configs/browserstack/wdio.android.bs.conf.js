export const config = {

    //
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: [
        './tests/forms/forms.test.js'
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
        'appium:app': 'bs://99a38da754106ef05c2307038b93f01487d6db9a'
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