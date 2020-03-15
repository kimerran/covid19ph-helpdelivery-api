const BaseController = require('./BaseController')

module.exports = class HelpController extends BaseController {
  constructor(helpModel) {
    super(helpModel)
    this.helpModel = helpModel
  }
  // async createMock() {
  //   await this.supervisorModel.create({
  //     name: 'New Supervisor'
  //   })

  //   return await super.findAll()
  // }
}