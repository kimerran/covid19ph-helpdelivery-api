const BaseRouter = require('./base.router')

module.exports = class HelpRouter extends BaseRouter {
  constructor(helpController) {
    super(helpController)
    this.helpController = helpController
  }

  _setRoutes() {
    super._setRoutes()
    // this.router.get('/s/mock', this._createMock.bind(this))
  }

  // async _createMock(req, res, next) {
  //   const all = await this.supervisorController.createMock()
  //   res.json(all)
  // }
}
