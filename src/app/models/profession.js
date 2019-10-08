'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profession = sequelize.define('Profession', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Este campo não pode ser vazio."
        }
      }    
    }
  }, {});

  Profession.associate = function (models) {
    // associations can be defined here
  };
  
  return Profession;
};