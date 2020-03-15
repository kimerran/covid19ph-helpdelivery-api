const Controllers = require('./controllers')

module.exports = class Controller {
  constructor(dbModels) {
    this.dbModels = dbModels
  }

  initializeControllers() {
    const dbModels = this.dbModels

    const controllers = {
      HelpCtrl : new Controllers['HelpCtrl'] (dbModels['HelpModel'])
    }

    return controllers;
  }

}