// delegator: escolhe a implementação por plataforma
let impl
if (typeof driver !== 'undefined' && driver.isAndroid) {
    impl = require('./loginScreen.android').default
} else {
    impl = require('./loginScreen.ios').default
}

export default impl
