const Model = require('./model')

module.exports = class Db {

  constructor(sequelize) {
    this.sequelize = sequelize
  }

  initializeModels() {
    const dbModels = {}
    Object.keys(Model).forEach(modelName => {
      const modelFn = Model[modelName]
      const modelInstance = modelFn(this.sequelize)
      dbModels[modelName] = modelInstance
      modelInstance.sync()
    });
    return dbModels
  }
}