'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Este campo não pode ser vazio."
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Este campo não pode ser vazio."
        }
      }
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Este campo não pode ser vazio."
        }
      }
    },
    profession: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Este campo não pode ser vazio."
        }
      }
    },
  }, {});
  Person.associate = function(models) {
    // associations can be defined here    
    Person.belongsTo(models.Profession, { foreignKey: 'profession', targetKey: 'id' });
  };
  return Person;
};