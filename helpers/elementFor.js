export function elementFor(selectors) {
    // aceita tanto a forma antiga { android, ios } quanto um selector string já específico da plataforma
    if (!selectors) throw new Error('Nenhum seletor fornecido para elementFor')
    if (typeof selectors === 'string') {
        return $(selectors)
    }
    if (selectors.android || selectors.ios) {
        return driver.isAndroid ? $(selectors.android) : $(selectors.ios)
    }
    throw new Error('Seletor inválido para elementFor')
}

export async function textFor(selectors, { timeout = 5000 } = {}) {
    const el = elementFor(selectors)
    await el.waitForDisplayed({ timeout })
    return el.getText()
}

export async function clickFor(selectors, { timeout = 5000 } = {}) {
    const el = elementFor(selectors)
    await el.waitForDisplayed({ timeout })
    // Para aplicações nativas, não usar waitForClickable pois não é suportado
    // (só é válido para browsers desktop/mobile)
    await el.click()
}

export async function addValueFor(selectors, value, { timeout = 5000 } = {}) {
    const el = elementFor(selectors)
    await el.waitForDisplayed({ timeout })
    if (typeof el.waitForEnabled === 'function') await el.waitForEnabled({ timeout })
    await el.addValue(value)
}

/**
 * Retorna true/false se o elemento está exibido.
 * Não lança erro quando não é exibido; retorna false.
 */
export async function isDisplayedFor(selectors, { timeout = 1000, wait = true } = {}) {
    const el = elementFor(selectors)
    if (wait) {
        try {
            await el.waitForDisplayed({ timeout })
        } catch (err) {
            // se timeout, assume que não está exibido
            return false
        }
    }
    return el.isDisplayed()
}

export async function getAttributeFor(selectors, attribute, { timeout = 5000 } = {}) {
    const el = elementFor(selectors)
    await el.waitForDisplayed({ timeout })
    return el.getAttribute(attribute)
}

export async function isSelectedFor(selectors, { timeout = 1000, wait = true } = {}) {
    const el = elementFor(selectors)
    if (wait) {
        try {
            await el.waitForDisplayed({ timeout })
        } catch (err) {
            return false
        }
    }
    return el.isSelected()
}

export default { elementFor, textFor, clickFor, addValueFor, isDisplayedFor, getAttributeFor, isSelectedFor }