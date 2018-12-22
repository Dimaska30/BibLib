'use strict';
const { User} = require("../models/index.js");

const UserController = {};

UserController.findUserByKey = (key,value)=>{
    return User.findOne({
        where: {
            [key] : value
        }
      });
}

UserController.findUserById = (id)=>{
    return User.findById(id);
}

UserController.create = (data)=>{ 
    return User.create(data);
};

UserController.fetchOne = async (ctx,next)=>{
    /* eslint-disable no-console */
    console.log("UserControllerFetchOne")
    /* eslint-disable no-console */
    const {id} = ctx.params;
    let user = await UserController.findUserById(id);
    ctx.body = user;
    await next();
};

module.exports = UserController;