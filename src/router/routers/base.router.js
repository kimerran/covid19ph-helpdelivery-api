
module.exports = class BaseRouter {
  constructor(baseController, logger) {
    this.router = require('express').Router()
    this.baseController = baseController
    // this.logger = logger
    this._setRoutes()
  }

  _setRoutes() {
    this.router.post('/', this._create.bind(this))
    this.router.put('/:id', this._update.bind(this))
    this.router.delete('/:id', this._delete.bind(this))
    this.router.get('/:id', this._findOne.bind(this))
    this.router.get('/', this._findAll.bind(this))
  }

  async _create(req, res, next) {
    // this.logger.debug('req.body', req.body)
    try {
      const entity = await this.baseController.create(req.body)
      res.json(entity)
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }

  }

  async _update(req, res, next) {
    const { id } = req.params
    const { body : updates } = req
    const result = await this.baseController.update(id, updates)
    res.json(result)
  }
  
  async _delete(req, res, next) {
    const { id } = req.params
    await this.baseController.delete(id)
    res.json('deleted')
  }

  async _findOne(req, res, next) {
    const { id } = req.params
    const entity = await this.baseController.findById(id)
    res.json(entity)
  }

  async _findAll(req, res, next) {
    const offset = Number(req.query.o) || 0
    const limit = Number(req.query.l) || 1000
    const entities = await this.baseController.findAll(offset, limit )
    res.json(entities)
  }

  getRouter() {
    return this.router
  }
}