const Sequelize = require('sequelize')
const { Model } = Sequelize

class HelpModel extends Model {}

module.exports = (sequelize) => {
  HelpModel.init({
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    type: Sequelize.ENUM('need', 'offer'),
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    fullAddress: Sequelize.STRING,
    geoLat: Sequelize.STRING,
    geoLong: Sequelize.STRING,
    contactPerson: Sequelize.STRING,
    contactNumber: Sequelize.STRING,
    contactFacebook: Sequelize.STRING,
  },
  {
    modelName: 'help',
    underscored: true,
    tableName: 'help',
    sequelize
  })
  return HelpModel
}

// try https://sequelize.org/master/manual/models-definition.html#import
