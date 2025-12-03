// delegator: escolhe a implementação por plataforma
let impl
if (typeof driver !== 'undefined' && driver.isAndroid) {
    impl = require('./homeScreen.android').default
} else {
    impl = require('./homeScreen.ios').default
}

export default impl
