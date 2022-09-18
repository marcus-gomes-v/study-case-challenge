
const { name, version } = require('../../package.json');
const { port } = require('../configuration/server');
const oApp = require('./app');
const addAppListeners = require('./listeners');
const { handleFatalError } = require('../errors');
const oSharedModule = require('../shared');

const init = () => {
  try {
    addAppListeners();
    oApp.listen(port, () => {
      console.log(oSharedModule.oTerminalColors.oRegularColors.Green, `📦 Node: ${process.version}`);
      console.log(oSharedModule.oTerminalColors.oRegularColors.Blue, `ℹ️  App: ${name}`)
      console.log(oSharedModule.oTerminalColors.oRegularColors.Blue, `ℹ️  Version: ${version}`)
      console.log(oSharedModule.oTerminalColors.oRegularColors.Yellow, `🌐 Listen on http://localhost:${port}/`)
    });
  } catch (error) {
    handleFatalError();
  }
};

module.exports = {
  init
}