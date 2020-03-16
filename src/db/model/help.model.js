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
    type: {
      allowNull: false,
      validate: {
        notEmpty: false,
      },
      type: Sequelize.ENUM('need', 'offer'),
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        notEmpty: false,
      },
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    contactPerson: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    contactNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    contactFacebook: {
      type: Sequelize.STRING,
    },
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
