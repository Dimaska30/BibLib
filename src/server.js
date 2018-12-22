'use strict';

const PORT = 3001;

const Koa = require('koa');
const serve = require('koa-static');
const port = process.env.PORT || PORT;
const app = new Koa();
app.proxy = true;

let { db, User } = require("./models");

db.then(() => {
  /* eslint-enable no-console */
  console.log('You have been corrected to db');
  /* eslint-enable no-console */
}).then(() =>{
  console.log('create user');
  let tempUser = {
    login: 'dimaska',
    password: 1223456,
    firstName: 'Dima',
    lastName: 'Pleskunov',
    birthday: Date.now(),
    sex:'M'
  }
  return User.create(tempUser);
})

//app.use(serve('public'));

app.use(async ctx => {
  let myName = (await User.findOne({
    where: {
        ['login'] : 'dimaska'
    }
  })).firstName;
    ctx.body = 'Hello '+myName;
  });

app.listen(port);
/* eslint-disable no-console */
console.log(`Server is started on ${port} port`);
/* eslint-enable no-console */