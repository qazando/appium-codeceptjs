const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automation_appium',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      url: 'http://127.0.0.1:4723/', // URL do servidor Appium
      app: '/Users/hsoares/Downloads/herbertao.apk',
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'emulator-5554', // Nome do dispositivo
        appPackage: 'com.qazandoqafood', // Pacote do aplicativo
        appActivity: 'MainActivity', // Atividade inicial do aplicativo
        automationName: 'UiAutomator2'
      },
      path: '/'
    }
  },
  include: {
    I: './steps_file.js' // Local do arquivo de etapas
  },
};