const Routers = require('./routers')

module.exports = class Router {
  constructor(controllers) {
    this.controllers = controllers
    // this.logger = logger
  }

  initializeRouters() {
    const ctrl = this.controllers
    // const logger = this.logger

    const routers = {
      HelpRouter: new Routers['HelpRouter'] (ctrl['HelpCtrl']),
    }

    return routers
  }
}
