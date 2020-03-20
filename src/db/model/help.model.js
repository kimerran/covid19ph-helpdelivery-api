// import node-modules
const Sequelize = require('sequelize');
const { Model } = Sequelize;

class HelpModel extends Model {}

module.exports = (sequelize) => {
  HelpModel.init({
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    type: {
      type: Sequelize.ENUM('need', 'offer'),
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    item: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    locCity: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    locBarangay: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    locOther: {
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
  });

  return HelpModel;
}

// docs say import is deprecated (do not use).
// try https://sequelize.org/master/manual/models-definition.html#import