'use strict';

const Sequalize = require('sequelize');

module.exports = function (sequalize) {
  return sequalize.define('user', {
    login: {
      type: Sequalize.STRING,
      validate: {
        notEmpty: true
      },
      allowNull: false
    },
    password: {
      type: Sequalize.STRING,
      validate: {
        min: 6,
        notEmpty: true
      },
      allowNull: false
    },
    firstName: {
      type: Sequalize.STRING,
      validate: {
        is: ["^[a-z]+$",'i']
      },
      allowNull: false
    },
    lastName: {
      type: Sequalize.STRING,
      validate: {
        is: ["^[a-z]+$",'i']
      }
    },
    birthday: {
      type: Sequalize.DATEONLY
    },
    sex: {
      type:Sequalize.STRING(1),
      validate: {
        isIn: [['F', 'M']]
      }
    },
    avatarUrl: {
      type: Sequalize.STRING(36)
    }
  });
};
