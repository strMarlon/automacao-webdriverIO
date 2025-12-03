// delegator: exporta a implementação adequada por plataforma
let impl
if (typeof driver !== 'undefined' && driver.isAndroid) {
  impl = require('./menuScreen.android').default
} else {
  impl = require('./menuScreen.ios').default
}

export default impl
