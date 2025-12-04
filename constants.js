// Importações
import LoginAndroidScreen from './screens/login/loginScreen.Android.js'
import LoginIosScreen from './screens/login/loginScreen.ios.js'
import HomeAndroidScreen from './screens/home/homeScreen.android.js'
import HomeIosScreen from './screens/home/homeScreen.ios.js'

const loginScreen = driver.isAndroid
    ? new LoginAndroidScreen()
    : new LoginIosScreen()

const homeScreen = driver.isAndroid
    ? new HomeAndroidScreen()
    : new HomeIosScreen()

// Exporta a instância correta baseada na plataforma
export { loginScreen, homeScreen }