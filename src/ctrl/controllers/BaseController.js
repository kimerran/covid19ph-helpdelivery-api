module.exports = class BaseController {
  constructor(baseModel) {
    this.baseModel = baseModel
  }

  async create(entity) {
    try {
      const newEntity = await this.baseModel.create(entity)
      return newEntity
    } catch (error) {
      throw error
    }
  }

  async update(id, updates) {
    return await this.baseModel.update(updates, {
      where: { id }
    })
  }

  async delete(id) {
    return await this.baseModel.destroy({
      where: { id }
    })
  }

  async findById(id) {
    const entity = await this.baseModel.findByPk(id)
    return entity
  }

  async findAll(offset = 0, limit = 1000) {
    console.log('findAll')
    const entities = await this.baseModel.findAll({
      offset,
      limit,
      order: [
        ['created_at', 'DESC']
      ]
    })
    return entities
  }
}