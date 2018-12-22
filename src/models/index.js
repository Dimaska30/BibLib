'use strict'

const CONFIG = {
  user: 'test-user',
  host: 'localhost',
  database: 'postgres',
  password: 'test-pwd',
  port: 5434
};


const { assign } = Object;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.database, CONFIG.user, CONFIG.password, {
  host: CONFIG.host,
  port:CONFIG.port,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


const User = require('./user')(sequelize);


let result = {};

let db = sequelize.sync({ force: true })

assign(result, { db, User });

module.exports = result;
